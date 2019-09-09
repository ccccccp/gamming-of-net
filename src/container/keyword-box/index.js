import { connect } from 'react-redux'
import KeywordBoxCmp from '@/components/keyword-box'
import { RMOVE_KEYWORD,ADD_KEYWORD } from '@/redux/keywords'
import { SET_LISTENER } from '@/redux/barrage-list'
import SocketInstance from '@/app/SocketInstance'
let socket = SocketInstance()

export default connect((store)=>{
  return {
    keywordList:store.keywords,
    roomList:store.roomSelected
  }
},(dispatch,getStore)=>{
  return {
    removeKeyword:(keyword)=>{
      dispatch({
        type:RMOVE_KEYWORD,
        payload:keyword
      })
    },
    addKeyword:(keyword)=>{
      dispatch({
        type:ADD_KEYWORD,
        payload:keyword
      })
    },
    setListener:(params)=>{
      dispatch(function(dispatch,getStore){
        console.log("store:",getStore())
        const {
          roomSelected,
          keywords
        } = getStore()
        const idList = roomSelected.map(room=>room.room_id)
        socket.changeFilter({
          idList,
          keywordList:keywords
        })
      })
    }
  }
})(KeywordBoxCmp)