import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import {unregister} from './serviceWorker'

import './styles/reset.css'
import './styles/global.less'

console.log("react:",React)
console.log("react-dom:",ReactDOM)

ReactDOM.render(<App />, document.getElementById('root'));

unregister()
