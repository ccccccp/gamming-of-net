import createReducer from './createReducer'

const initialState = []
export const ADD_ROOM = 'ADD_ROOM'//action-type
export const RMOVE_ROOM = 'RMOVE_ROOM'//action-type
export const CLEAR_ROOM = 'CLEAR_ROOM'//action-type

export default createReducer(initialState,{
  [ADD_ROOM]:(state,action)=>{//add
    console.log("add-room")
    const newRoomInfo = action.payload
    let isDeff = state.every((room)=>{
      return room.room_id!==newRoomInfo.room_id
    })
    if(!isDeff){
      return state
    }
    return [...state,{...newRoomInfo}]
  },
  [RMOVE_ROOM]:(state,action)=>{//remove {payload:roomid}
      const removeId = action.payload
      return state.filter((room)=>{
        return room.room_id !== removeId
      })
  },
  [CLEAR_ROOM]:(state,action)=>{//设置列表,用于接口返回后设置{payload:{key:'channelInfo',list:[{...}]}}
    return []
  }
})