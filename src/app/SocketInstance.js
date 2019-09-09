class SocketClient{
  constructor(props={}){
    this.onBarrage = props.onBarrage;//监听获取到弹幕事件
    this.isConnect = false
    this.socket = null
  }
  connect(){
    this.socket = new WebSocket('ws://127.0.0.1:702')
    this.socket.onopen = this._onOpen
    this.socket.onmessage = this._onData.bind(this)
    this.socket.onerror = this._onError
  }
  changeFilter(data){
    this.socket.send(JSON.stringify(data))
  }
  _onOpen(){
    this.isConnect = true;
  }
  _onData(data){
    if(this.onBarrage){
      console.log("收到服务器消息：",data)
      this.onBarrage(data)
    }
  }
  _onError(){
    this.isConnect = false;
    console.log("socket服务器出错！")
  }
}
let socketSigned = null;

function getSocketInstance(){
  let args = Array.from(arguments)
  if(!socketSigned){
    return socketSigned = new SocketClient(...args)
  }
  return socketSigned
}
export default getSocketInstance