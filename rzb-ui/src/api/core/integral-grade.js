import request from '@/utils/request'

export function list() {
  return request({
    url: '/core/integralGrade/list',
    method: 'get'
  })
}
