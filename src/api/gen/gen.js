import request from '@/utils/request'

// 分页查询
export function list(data) {
    return request({
        url: '/gen/list',
        method: 'post',
        data: data
    })
}

// 代码生成
export function gen(data) {
    return request({
        url: '/gen/gen',
        method: 'get',
        params: data
    })
}

export function downLoadZip(str, filename) {
  var url = process.env.base_url + str
  window.location.href=url;
}