import BaseRequest,{ Params,Options,ResponseData } from './lib/baseRequest'

const request = {
  get(url:string,params:Params,options:Options={}):Promise<ResponseData>{
    return BaseRequest(url,'GET',params,options)
  },
  post(url:string,params:Params,options:Options={}):Promise<ResponseData>{
    return BaseRequest(url,'POST',params,options)
  }
}
export default request