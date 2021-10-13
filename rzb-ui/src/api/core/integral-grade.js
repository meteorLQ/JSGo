import request from '@/utils/request'

export function list() {
  return request({
    url: '/core/integralGrade/list',
    method: 'get'
  })
}

export function deleteById(id) {
  return request({
    url: '/core/integralGrade/delete/'+id,
    method: 'delete'
  })
}

export function save(integralGrade) {
  return request({
    baseURL:'/dev-api',
    url: '/core/integralGrade/save',
    method: 'post',
    data: integralGrade
  })
}
