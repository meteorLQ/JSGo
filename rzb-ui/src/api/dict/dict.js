import request from "@/utils/request";

export function listByParentId(parentId) {
  return request({
    url: `/dict/listByParentId/${parentId}`,
    method: 'get'
  })
}
