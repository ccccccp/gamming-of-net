import React, { Component } from 'react'

import './style'

export default class BarrageItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {
      children
    } = this.props
    return (
      <div className="barrage-item">
        <span className="barrage-info">
          { children }
        </span>
      </div>
    )
  }
}
