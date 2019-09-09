import React, { Component } from 'react'
import { Card } from '@/components/lib'

import './style'

export default class RoomItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {
      data,
      onRemove
    } = this.props
    const { room_id,room_name,nickname } = data
    return (
      <div className="room-selected-item">
        <span className="room-info">
          {nickname}-{room_name}-{room_id}
        </span>
        <span className="close" onClick={()=>onRemove(room_id)}>删除</span>
      </div>
    )
  }
}
