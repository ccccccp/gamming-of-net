import React from 'react'

const theme = Math.random() > 0.9?'theme-dark':'theme-light'

export default (Cmp) => (props) =>{
  return <Cmp themeClass={theme} {...props} />
}