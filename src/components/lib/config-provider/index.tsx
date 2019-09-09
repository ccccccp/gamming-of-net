import * as React from 'react'
import createReactContext, { Context } from 'create-react-context'

type theme = 'theme-dark' | 'theme-light'

export interface ConfigConsumerProps {
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;//弹框父元素
  rootPrefixCls?:string;
  getPrefixCls:(suffixCls:string,customizePrefixCls?:string) => string;
  themeClass?:theme;
}

interface ConfigProviderProps {
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;//弹框父元素
  rootPrefixCls?: string;//组件class前缀
  children?: React.ReactNode;//子元素
  themeClass?:theme//主题class
}

const ConfigContext:Context<ConfigConsumerProps | null> = createReactContext({
  getPrefixCls:(suffixCls,customizePrefixCls) => {
    if(customizePrefixCls){
      return customizePrefixCls
    }
    return `ant-${suffixCls}`
  }
})
export const ConfigConsumer = ConfigContext.Consumer//context属性包裹组件
class ConfigProvider extends React.Component<ConfigProviderProps>{
  renderProvider = (context:ConfigConsumerProps)=>{
    const {children,...reset} = this.props;
    const config = {
      ...context,
      ...reset
    }
    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  }
  render(){
    return (
      <ConfigConsumer>{this.renderProvider}</ConfigConsumer>
    )
  }
}


export default ConfigProvider