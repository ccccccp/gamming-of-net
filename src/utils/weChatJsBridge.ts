import { getSignature } from '../services/index'

interface WxSignatureConfig {
  appId: string;
  timestamp: string;
  noncestr: string;
  signature: string
}
class WechatJsBridge {
  //获取微信签名
  getWechatSignature() {
    return new Promise((resolve, reject) => {
      const url = window.location.href.split("#")[0]
      getSignature({ url })
        .then((res) => {
          if (+res.errcode == 0) {
            resolve(res.data)
          }
          reject(res)
        })
        .catch((err) => {
          reject(err)
        })
    })

  }
  //注入权限验证配置
  registerJsApi(debug = false) {
    this.getWechatSignature().then((config: WxSignatureConfig) => {
      window.wx.config({
        debug: debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId, // 必填，公众号的唯一标识
        timestamp: String(config.timestamp), // 必填，生成签名的时间戳
        nonceStr: config.noncestr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名
        success:(res)=>{
          console.log("success:",res)
        },
        fail:(err)=>{
          console.log("fail:",err)
        },
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'translateVoice',
          'startRecord',
          'stopRecord',
          'onRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard',
          'openAddress',
          "chooseInvoiceTitle"] // 必填，需要使用的JS接口列表
      });
    }).catch((err) => {
      console.log("获取微信签名失败",err)
    })
  }
}

export default new WechatJsBridge()