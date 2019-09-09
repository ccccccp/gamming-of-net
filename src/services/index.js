import request from '@/utils/request'
export const getChannelList = (params) => {
  return request.post('/api/live/getChannelList',params)
}
export const getRoomList = (params) => {
  return request.post('/api/live/getRoomList',params)
}

/**
 * 获取微信签名
 * @param {*} params 
 */
export const getSignature = (params) => {
  return request.post('/api/user/sign/getSignature',params)
}