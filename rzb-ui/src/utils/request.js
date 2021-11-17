import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import errorCode from '@/utils/errorCode'
import {getToken} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request 拦截器
service.interceptors.request.use(config => {
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false

    if (getToken() && !isToken) {
      // 让每个请求携带自定义token
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(response => {
    // 响应编码
    const code = response.data.code || 200;
    // 消息提示处理
    const msg = errorCode[code] || response.data.msg || errorCode["default"]
    // if the custom code is not 20000, it is judged as an error.
    if (code===401) {
      MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(()=>{
        store.dispatch('logout').then(()=>{
            location.href='/index';
        })
      }).catch(()=>{});
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    }else if (code===500){
      Message({
        message:msg,
        type:'error'
      })
      return Promise.reject(new Error(msg))
    }else if (code!==200){
      Notification.error({
        title: msg
      })
      return Promise.reject('error')
    }else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    let {message} = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
