import { connect } from 'react-redux'
import RoomSelectorCmp from '@/components/room-selector'
import { INIT_ROOM_SELECTOR,SET_CURRENT,SET_SELECTOR_LIST } from '@/redux/room-selector'
import { CHANGE_THEME } from '@/redux/global'
import { ADD_ROOM } from '@/redux/room-selected'
import { SET_LISTENER } from '@/redux/barrage-list'
import { getChannelList,getRoomList } from '@/services'

export default connect((store)=>{
  return {
    ...store.roomSelector
  }
},(dispatch)=>{
  return {
    initRoomSelector:()=>{
      dispatch({
        type:INIT_ROOM_SELECTOR
      })
    },
    setCurrent:(key,value)=>{
      dispatch({
        type:SET_CURRENT,
        payload:{
          key,
          value
        }
      })
    },
    getChannelList:(params)=>{
      getChannelList(params).then((res)=>{
        if(res.errcode === 0){
          dispatch({
            type:SET_SELECTOR_LIST,
            payload:{
              key:'channelInfo',
              list:[{title:'请选择',value:''},...res.data.list]
            }
          })
        }
      })
    },
    getRoomList:(params)=>{
      getRoomList(params).then((res)=>{
        if(res.errcode === 0){
          dispatch({
            type:SET_SELECTOR_LIST,
            payload:{
              key:'roomInfo',
              list:[{title:'请选择',value:''},...res.data.list]
            }
          })
        }
      })
    },
    addRoom:(roomInfo)=>{
      dispatch({
        type:ADD_ROOM,
        payload:roomInfo
      })
    },
    toggleTheme:()=>{
      dispatch({
        type:CHANGE_THEME
      })
    }
  }
})(RoomSelectorCmp)