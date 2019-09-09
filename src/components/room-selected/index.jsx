import React, { Component } from 'react'
import { Card } from '@/components/lib'
import RoomItem from './room-item'

import './style'

export default class RoomSelected extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {
      roomList,
      removeRoom
    } = this.props
    return (
      <div className="room-selected">
        <Card title="已选房间">
          {
            roomList.map((roomInfo)=>{
              return <RoomItem data={roomInfo} onRemove={removeRoom} key={roomInfo.room_id} />
            })
          }
        </Card>
      </div>
    )
  }
}
