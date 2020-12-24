import { combineReducers } from "redux"
import { CHANGE_THEME, DECREMENT, DESABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types"

function counterReducer(state = 42, action) {
    if (action.type === INCREMENT) {
       return state + 1
    } else if (action.type === DECREMENT) {
       return state -1
    }
    
    return state
}

const initThemeState = {
   value: 'light',
   disabled: false
}
function themeReducer(state = initThemeState, action) {
   switch(action.type) {
      case CHANGE_THEME:
         return {...state, value: action.preload}
      case ENABLE_BUTTONS:
         return {...state, disabled: false}
      case DESABLE_BUTTONS:
         return {...state, disabled: true}
      default: return state
   }
}

export const rootReducer = combineReducers( {
   counter: counterReducer,
   theme: themeReducer
})