import React, { Component } from 'react'
import classnames from 'classnames'

class OptionList extends Component {
  constructor(props) {
    super(props)
  }
  handleOptionClick(props){
    if(this.props.onSelector){
      this.props.onSelector(props)
    }
  }
  render() {
    const { options=[], current='' } = this.props
    
    return (
        <React.Fragment>{
          options.map(({ title, value },i) => {
            return <Option key={i} onClick={()=>this.handleOptionClick({title, value})} value={value} isCurrent={(current !== undefined) && current === value}>{title}</Option>
          })
        }</React.Fragment>
    );
  }
}

class Option extends Component {
  constructor(props) {
    super(props)
    this.handleOptionClick = this.handleOptionClick.bind(this)
  }
  handleOptionClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props)
    }
  }
  render() {
    const {
      isCurrent,
      value,
      children
    } = this.props
    const className = classnames("options-item",{active:!!isCurrent})
    return <div className={className} onClick={this.handleOptionClick}>
      {children}
    </div>
  }
}

export default OptionList;
