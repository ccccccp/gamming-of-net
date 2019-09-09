import { connect } from 'react-redux'
import RoomSelectedCmp from '@/components/room-selected'
import { RMOVE_ROOM,CLEAR_ROOM } from '@/redux/room-selected'


export default connect((store)=>{
  return {
    roomList:store.roomSelected
  }
},(dispatch)=>{
  return {
    removeRoom:(id)=>{
      dispatch({
        type:RMOVE_ROOM,
        payload:id
      })
    },
    clearRoom:(params)=>{
      dispatch({
        type:CLEAR_ROOM
      })
    }
  }
})(RoomSelectedCmp)