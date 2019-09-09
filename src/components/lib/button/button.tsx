import React, { Component } from 'react'
import clname from 'classnames'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import './style'

export interface BaseButtonProps {
  classname?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

class Button extends Component<BaseButtonProps> {
  handleClick:React.MouseEventHandler<HTMLButtonElement | HTMLBaseElement> = (e:any) => {
    const {loading,onClick} = this.props
    if(loading){
      return
    }
    if(onClick){
      onClick(e)
    }
  }
  renderButton = (consumerConfig:ConfigConsumerProps)=>{
    const {themeClass} = consumerConfig
    const {classname:propClass,disabled=false,children,onClick=()=>{}} = this.props
    const classes = clname("button",themeClass,propClass)
    return <button className={classes} disabled={disabled} onClick={this.handleClick}>
    { children }
  </button>
  }
  render() {
    return <ConfigConsumer>{this.renderButton}</ConfigConsumer>
  }
}
export default Button