import React, { Component } from 'react'
import clname from 'classnames'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import './style'

interface BaseCardProps extends React.ComponentClass{
  classname?:string;
  title:React.ReactNode;
}
export default class Card extends Component<BaseCardProps> {
  renderCard = (configConsumer:ConfigConsumerProps) => {
    const {classname:propClass,title,children} = this.props
    const classes = clname("card",{classname:propClass})
    return (
      <div className={classes}>
        <div className="title">{title}</div>
        <div className="content">
          { children }
        </div>
      </div>
    )
  }
  render(){
    return <ConfigConsumer>{this.renderCard}</ConfigConsumer>
  }
}
