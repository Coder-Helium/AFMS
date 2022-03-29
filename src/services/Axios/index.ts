/* eslint-disable no-template-curly-in-string */
import axios from 'axios'

export function getDataInfo (url:string, params?:any) {
  return axios({
    url: 'http://127.0.0.1:4523/mock/791543/' + url,
    params: params,
    method: 'get'
  })
}
export function postDataInfo (url:string, data?:any) {
  console.log(data);
  return axios({
    url: 'http://127.0.0.1:4523/mock/791543/' + url ?? '',
    data: data ?? '',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
