import React from 'react'
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider'
import OptionList from './OptionList'
import classnames from 'classnames' 
import './style'
/**
 * current:'1'
 * options:[{title:'啊啊啊',value:'1'}]
 * onSelector:function
 * disabled
 */
interface Option{
  value:string;
  title:React.ReactNode
}
interface BaseSelectProps extends React.ClassicComponentClass{
  onSelector?:React.MouseEventHandler;
  disabled?:boolean;
  current?:string;
  options?:Option[];
}
interface SelectState{
  isOpen:boolean;
}
class Select extends React.Component<BaseSelectProps> {
  state:Readonly<SelectState>;
  constructor(props) {
    super(props)
    this.state = {
      isOpen:false
    }
  }
  handleSelect = (option)=>{
    this.closeOptions()
    if(this.props.onSelector){
      this.props.onSelector(option)
    }
  }
  closeOptions = ()=>{
    setTimeout(()=>{
      this.setState({
        isOpen:false
      });
      document.body.removeEventListener("click",this.closeOptions)
    })
    
  }
  componentWillUnmount(){
    this.closeOptions()
  }
  openOptions(){
    const {isOpen} = this.state
    if(isOpen || this.props.disabled) return
    this.setState({
      isOpen:!isOpen
    },()=>{
      document.body.addEventListener("click",this.closeOptions)
    });
  }
  renderSelect = (consumerConfig:ConfigConsumerProps)=>{
    const {themeClass} = consumerConfig
    const { options,current,disabled } = this.props
    const { isOpen } = this.state
    let currentInOptions = false
    let currentTitle = null
    options.forEach((option) => {
      if (option.value === current) {
        currentTitle = option.title
        currentInOptions = true
      }
    })
    const clsname = classnames("select-container",themeClass,{disabled})
    return <div className={clsname}>
      <div className="select-label" onClick={this.openOptions}>
        <div className="text-line1">{currentTitle}</div>
      </div>
      {isOpen && <div className={`options-container ${themeClass}`}><OptionList options={options} current={current} onSelector={this.handleSelect} /></div>}
    </div>
  }
  render(){
    return <ConfigConsumer>{this.renderSelect}</ConfigConsumer>
  }
}
export default Select