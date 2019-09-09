import { createStore,combineReducers,applyMiddleware } from 'redux'
import middleware from 'redux-thunk'
import roomSelector from './room-selector';
import roomSelected from './room-selected';
import keywords from './keywords';
import global from './global';
import barrageInfo from './barrage-list'

const reducers =  combineReducers({
    global,
    roomSelector,
    roomSelected,
    keywords,
    barrageInfo
})
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

export default store