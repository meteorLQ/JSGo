import request from "@/utils/request";

export function listByParentId(parentId) {
  return request({
    url: `/dict/listByParentId/${parentId}`,
    method: 'get'
  })
}

export function saveOrUpdateDict(dict) {
  return request({
    url: '/dict/saveOrUpdateDict',
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

export function getDictById(id) {
  return request({
    url: '/dict/getById/'+id,
    method: 'get'
  })
}

