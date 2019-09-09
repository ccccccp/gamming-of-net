import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/layout'
import ConsumerProvider from '../container/ConsumerProvider'
import Main from './Main'
import store from '../redux/store'
import WxBridge from '../utils/weChatJsBridge'
console.log("Privider", Provider)
class App extends Component {
  constructor(props) {
    super(props)
    WxBridge.registerJsApi(true)
  }
  componentDidMount() {
    window.wx.ready(() => {
      window.wx.onMenuShareAppMessage({
        title: 'xxxx',
        desc: 'yyyyy',
        link: 'https://www.abc.com/event/yyy.html#/?mode=help&uid=222',
        imgUrl: 'https://www.abc.com/static/images/yyy/middle_logo-de1bf149dc.png',
        success() {
          console.log('onMenuShareAppMessage success');
        }
      });
    })
    window.wx.error(function (err) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log("wx-err!", err)
    });
  }
  render() {
    return (
      <Provider store={store}>
        <ConsumerProvider>
          <Layout>
            <Main />
          </Layout>
        </ConsumerProvider>
      </Provider>
    )
  }
}



export default App;
