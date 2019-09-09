import React, { Component } from 'react'
import RoomSelector from '../container/room-selector'
import RoomSelected from '../container/room-selected'
import KeywordBox from '../container/keyword-box'
import BarrageBox from '../container/barrage-box'
const rowStyle = {
  'display':'flex',
  // 'justify-content': 'space-between'
}
const colStyle = {
  'margin':'0 30px 30px 0'
}
export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>

        <div style={rowStyle}>
          <div style={colStyle}>
            <RoomSelector />
          </div>
          <div style={colStyle}>
            <KeywordBox />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={colStyle}>
            <RoomSelected />
          </div>
          <div style={colStyle}>
            <BarrageBox />
          </div>
        </div>


      </div>
    )
  }
}
