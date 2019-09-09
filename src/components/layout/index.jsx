import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import themeClass from '@/hoc/themeClass'
import './index.less'

@themeClass
class Layout extends Component {
  render() {
    const { themeClass:theme,children } = this.props
    return (
      <div className={`${theme} app-layout`}>
        <Header />
        <Content>
          { children }
        </Content>
        <Footer />
      </div>
    )
  }
}

export default Layout