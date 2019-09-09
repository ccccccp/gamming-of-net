import React, { Component } from 'react'
import './style'

export default class Tag extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { onClose,children,closeable } = this.props
    return (
      <span className="tag">
        { children }
        { closeable && <i className="close" onClick={onClose}></i> }
      </span>
    )
  }
}
