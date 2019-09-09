import React, { Component } from 'react'
import clname from 'classnames'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import './style'

interface BaseInputProps extends React.ClassicComponentClass{
  onChange?:React.ChangeEventHandler;
  disabled?:boolean;
  value?:string;
  classname?:string;
}
class Input extends Component<BaseInputProps> {
  renderInput = (configConsumer:ConfigConsumerProps) => {
    const {classname:propClass,value,onChange,disabled=false} = this.props
    const { themeClass } = configConsumer
    const classname = clname("input",themeClass,propClass)
    return (
      <input className={classname} disabled={disabled} onChange={onChange} value={value} />
    )
  }
  render(){
    return <ConfigConsumer>{this.renderInput}</ConfigConsumer>
  }
}
export default Input