import React, { Component } from 'react'
import { Card,Button } from '@/components/lib'
import SocketInstance from '@/app/SocketInstance'
import BarrageItem from './barrage-item'

import './style'

export default class BarrageBox extends Component {
  constructor(props) {
    super(props)
    this.socket = SocketInstance()
    this.socket.connect()
    this.socket.onBarrage = this.onBarrage.bind(this)
  }
  onBarrage(data) {
    this.props.addBarrage(data.data)
  }
  render() {
    const {
      idList,
      keywordList,
      barrageList,
      clearBarrage
    } = this.props
    return (
      <div className="room-selected">
        <Card title="已接收弹幕">
        <div><Button onClick={clearBarrage}>清空弹幕</Button></div>
          <div>id:
            {
              idList.map(id => <span key={id}>{id}&nbsp;</span>)
            }
          </div>
          {
            barrageList.map((barrage, i) => {
              return <BarrageItem key={i}>
                {barrage}
              </BarrageItem>
            })
          }
        </Card>
      </div>
    )
  }
}
