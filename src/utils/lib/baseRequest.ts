import 'whatwg-fetch'
import { getQueryPath } from '../'
import TimeOut from './timeOutPromise'


export interface Params {
  [propName: string]: any
}
export interface ResponseData {
  errcode:number;
  message?:string;
  data?:any;
  [propName: string]: any
}
export interface Options{
  timeOut?:number;
  [propName: string]: any
}
export type Method = 'POST' | 'GET'


const request = function(url:string,method:Method,params:Params,options:Options){
  const { timeOut=10000 } = options//10s接口未返回
  const option:RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include'
  }
  if(method === 'POST'){
    option.body = JSON.stringify(params)
  }else if(method === 'GET'){
    url = getQueryPath(url,params)
  }
  const ResultPromise =  fetch(url,option).then((response)=>{
    return response.json()
  }).catch((err)=>{
    return Promise.reject({
      errcode:-1,
      message:'网络错误'
    })
  })
  return Promise.race([
    TimeOut(timeOut),
    ResultPromise
  ])
}

export default request