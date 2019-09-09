import createReducer from './createReducer'

const initialState = {
  netInfo:{
    current:'',
    list:[{title:'请选择',value:''}]
  },
  channelInfo:{
    current:'',
    list:[{title:'请选择',value:''}]
  },
  roomInfo:{
    current:'',
    list:[{title:'请选择',value:''}]
  }
}
export const INIT_ROOM_SELECTOR = 'INIT_ROOM_SELECTOR'//action-type
export const SET_SELECTOR_LIST = 'SET_SELECTOR_LIST'//action-type
export const SET_CURRENT = 'SET_CURRENT'//action-type

export default createReducer(initialState,{
  [INIT_ROOM_SELECTOR]:(state,action)=>{//初始化
    return {
      netInfo:{
        current:'',
        list:[{title:'请选择',value:''},{title:'斗鱼',value:'douyu'},{title:'虎牙',value:'huya'}]
      },
      channelInfo:{
        current:'',
        list:[{title:'请选择',value:''},{title:'LOL',value:'lol'},{title:'DNF',value:'dnf'}]
      },
      roomInfo:{
        current:'',
        list:[{title:'请选择',value:''}]
      }
    }
  },
  [SET_CURRENT]:(state,action)=>{//设置值,{payload:{key:'channelInfo',value:''}}
    const { key,value } = action.payload
      const newState = {
        ...state,
        [key]:{
          ...state[key],
          current:value
        }
      }
      return resetForm(key,newState)
  },
  [SET_SELECTOR_LIST]:(state,action)=>{//设置列表,用于接口返回后设置{payload:{key:'channelInfo',list:[{...}]}}
    let { key,list } = action.payload
      return {
        ...state,
        [key]:{
          current:'',
          list
        }
      }
  }
})

function getNewSelector(){
  return {
    current:'',
    list:[{title:'请选择',value:''}]
  }
}
function resetForm(currentSelector,state){
  switch(currentSelector){
    case 'netInfo':
    return {
      ...state,
      channelInfo:getNewSelector(),
      roomInfo:getNewSelector()
    }
    case 'channelInfo':
    return {
      ...state,
      roomInfo:getNewSelector()
    }
    default:
    return {
      ...state
    }
  }
}