import { TOGGLE_SIDEBAR, SIDEBAR_STATUS } from '../actions/types'

const initilState = {
  sidebarStatus: true
}
export default function(state = initilState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: !state.sidebarStatus }
      break
    case SIDEBAR_STATUS:
      return state
      break
    default:
      return state
      break
  }
}
