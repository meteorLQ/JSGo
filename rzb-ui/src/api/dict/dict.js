import request from "@/utils/request";

export function listByParentId(parentId) {
  return request({
    url: `/dict/listByParentId/${parentId}`,
    method: 'get'
  })
}

export function save(dict) {
  return request({
    url: '/dict/saveDict',
    method: 'post',
    data: dict
  })
}

export function deleteById(id) {
  return request({
    url: '/dict/delete/'+id,
    method: 'delete'
  })
}
