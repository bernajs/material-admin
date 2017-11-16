import { TOGGLE_SIDEBAR, SET_TITLE, SIDEBAR_STATUS } from '../actions/types'

const initilState = {
  sidebarStatus: true,
  title: 'Inicio'
}
export default function(state = initilState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: !state.sidebarStatus }
      break
    case SET_TITLE:
      return { ...state, title: action.payload }
      break
    case SIDEBAR_STATUS:
      return state
      break
    default:
      return state
      break
  }
}
