import React, { Component } from 'react'
import { Card,Select,Button } from '@/components/lib'

import './style'

export default class RoomSelector extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.initRoomSelector()
  }
  handleSelect = (Key,{value,title})=>{
    this.props.setCurrent(Key,value);
    if(value === ''){
      return
    }
    if(Key==='netInfo'){
      this.props.getChannelList({netId:value})
    }else if(Key === 'channelInfo'){
      const netId = this.props.netInfo.current
      this.props.getRoomList({channelId:value,netId})
    }else if(Key === 'roomInfo'){
      console.log(value)
      const [nickname,room_name,room_id] = title.split(" - ")
      this.props.addRoom({
        nickname,
        room_name,
        room_id
      })
    }
  }
  render() {
    const {
      netInfo:{current:currentNet,list:netList},
      channelInfo:{current:currentChannel,list:channelList},
      roomInfo:{current:currentRoom,list:roomList}
    } = this.props
    return (
      <div className="room-selector">
        <Card title="添加房间">
          <div className="selector-group">
            <span className="selector-label">直播网站:</span>
            <Select options={netList} current={currentNet} onSelector={(netInfo)=>this.handleSelect('netInfo',netInfo)}></Select>  
          </div>
          <div className="selector-group">
            <span className="selector-label">频道:</span>
            <Select disabled={currentNet===''} options={channelList} current={currentChannel} onSelector={(channelInfo)=>this.handleSelect('channelInfo',channelInfo)}></Select>  
          </div>
          <div className="selector-group">
            <span className="selector-label">房间号:</span>
            <Select disabled={currentChannel===''} options={roomList} current={currentRoom} onSelector={(roomInfo)=>this.handleSelect('roomInfo',roomInfo)}></Select>  
          </div>
          <div className="selector-group">
            <span className="selector-label">切换按钮主题色:</span>
            <Button onClick={this.props.toggleTheme}>切换</Button>  
          </div>
        </Card>
      </div>
    )
  }
}
