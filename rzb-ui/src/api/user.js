import request from '@/utils/request'

export function login(LoginUser) {
  return request({
    url: '/login',
    method: 'post',
    data: LoginUser
  })
}


export function getInfo() {
  return request({
    url: '/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
