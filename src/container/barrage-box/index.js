import { connect } from 'react-redux'
import BarrageListCmp from '@/components/barrage-list'
import { ADD_BARRAGE,CLEAR_BARRAGE } from '@/redux/barrage-list'


export default connect((store)=>{
  return {
    idList:store.roomSelected.map(room=>room.room_id),
    keywordList:store.keywords,
    barrageList:store.barrageInfo.barrageList
  }
},(dispatch)=>{
  return {
    addBarrage:(barrage)=>{
      dispatch({
        type:ADD_BARRAGE,
        payload:barrage
      })
    },
    clearBarrage:()=>{
      dispatch({
        type:CLEAR_BARRAGE
      })
    }
  }
})(BarrageListCmp)