// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建一个路由器
const router = new VueRouter({
    mode:'hash',
    routes: [
        {
            path: '/about',
            component: About,

            meta:{title:'关于'}
            // 独享路由守卫
            // beforeEnter:(to, from, next)=>{
            //     if (to.meta.isAuth){
            //         alert("暂无权限")
            //     }
            // }
        },
        {
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: {isAuth: true,title:'主页'}
                },
                {
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true},
                    children: [
                        {
                            // 路由命名
                            name: 'detail',
                            path: 'detail/:id/:msg',
                            component: Detail,
                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true
                            // props的第三种写法 函数
                            props($router) {
                                return {id: $router.params.id, msg: $router.params.msg}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
// 全局前置路由守卫---初始化的时候被调用、每次路由切换之前被调用
router.beforeEach(function (to, from, next) {
   if (to.meta.isAuth){
          // next()
           alert("暂无权限")
   }else {
       next()
   }
})
// 全局后置路由守卫-初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from)=>{
    document.title=to.meta.title||'硅谷系统'
})



export default router