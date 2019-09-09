import createReducer from './createReducer'

const initialState = []
export const ADD_KEYWORD = 'ADD_KEYWORD'//action-type
export const RMOVE_KEYWORD = 'RMOVE_KEYWORD'//action-type
export const CLEAR_KEYWORD = 'CLEAR_KEYWORD'//action-type

export default createReducer(initialState,{
  [ADD_KEYWORD]:(state,action)=>{//add
    const newKeyword = action.payload
    let isHas = state.indexOf(newKeyword) > -1
    if(isHas){
      return state
    }
    return state.concat(newKeyword)
  },
  [RMOVE_KEYWORD]:(state,action)=>{//remove {payload:roomid}
      const removeItem = action.payload
      return state.filter((keyword)=>{
        return keyword !== removeItem
      })
  },
  [CLEAR_KEYWORD]:(state,action)=>{//设置列表,用于接口返回后设置{payload:{key:'channelInfo',list:[{...}]}}
    return []
  }
})