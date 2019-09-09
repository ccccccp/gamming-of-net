import createReducer from './createReducer'

const initialState = {
  idList:[],//id列表,暂时用不到，从selectedlist中取
  barrageList:[]//已匹配弹幕列表
}
export const ADD_BARRAGE = 'ADD_BARRAGE'//action-type
export const RMOVE_BARRAGE = 'RMOVE_BARRAGE'//action-type
export const CLEAR_BARRAGE = 'CLEAR_BARRAGE'//action-type
export const SET_LISTENER = 'SET_LISTENER'//action-type

export default createReducer(initialState,{
  [ADD_BARRAGE]:(state,action)=>{//add
    const newBarrage = action.payload

    return {
      ...state,
      barrageList:state.barrageList.concat(newBarrage)
    }
  },
  [RMOVE_BARRAGE]:(state,action)=>{//remove {payload:roomid}
      const removeItem = action.payload
      return state.filter((barrage)=>{
        return barrage !== removeItem
      })
  },
  [CLEAR_BARRAGE]:(state,action)=>{//设置列表,用于接口返回后设置{payload:{key:'channelInfo',list:[{...}]}}
    return {
      ...state,
      barrageList:[]
    }
  },
  [SET_LISTENER]:(state,action)=>{
    return {
      ...state,
      idList:action.payload.idList,
    }
  }
})