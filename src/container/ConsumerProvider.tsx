import { connect } from 'react-redux'
import ConsumerProvider from '../components/lib/config-provider'
export default connect((store)=>{
  return {
    ...store.global
  }
},null)(
  ConsumerProvider
)