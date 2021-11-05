import request from '@/utils/request'

export function login(LoginUser) {
  return request({
    url: '/login',
    method: 'post',
    data: LoginUser
  })
}


export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
