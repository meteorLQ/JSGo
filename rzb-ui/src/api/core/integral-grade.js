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
