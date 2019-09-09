import createReducer from './createReducer'

const initialState = {
  themeClass:'theme-light'
}
export const CHANGE_THEME = 'CHANGE_THEME'//action-type


export default createReducer(initialState,{
  [CHANGE_THEME]:(state,action)=>{//add
    const newTheme = state.themeClass === 'theme-light'?'theme-dark':'theme-light'
    return {
      ...state,
      themeClass:newTheme
    }
  }
})