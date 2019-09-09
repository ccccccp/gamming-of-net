import React, { Component } from 'react'
import { Card,Input,Tag,Button } from '@/components/lib'

import './style'

export default class KeywordBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword:''
    }
    this.addKeyword = this.addKeyword.bind(this)

  }
  handleChange = (e)=>{
    this.setState({keyword:e.target.value})
  }
  addKeyword(){
    const keyword = this.state.keyword.trim()
    if(keyword){
      this.props.addKeyword(keyword)
      this.setState({keyword:''})
    }
  }
  submit = ()=>{
    const {
      keywordList,
      roomList,
    } = this.props;
    const idList = roomList.map((room)=>room.room_id)
    this.props.setListener({
      idList,
      keywordList
    })
  }
  render() {
    console.log(this.props)
    const {
      keywordList,
      roomList,
      removeKeyword
    } = this.props
    const disabled = keywordList.length === 0 || roomList.length === 0
    return (
      <div className="keyword-box">
        <Card title="添加关键字">
          <div className="input-submitor">
            <div className="flex1"><Input value={this.state.keyword} onChange={this.handleChange} /></div>
            <Button onClick={this.addKeyword}>确定</Button>
          </div>
          <div className="form-group">
            <div>已添加关键字：</div>
            <div>
              {
                keywordList.map((keyword,i)=>{
                  return <span key={i}><Tag closeable onClose={()=>{removeKeyword(keyword)}}>{keyword}</Tag>&nbsp;</span>
                })
              }
            </div>
          </div> 
          <Button disabled={disabled} onClick={this.submit}>确定</Button>
        </Card>
      </div>
    )
  }
}
