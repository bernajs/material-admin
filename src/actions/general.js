import { TOGGLE_SIDEBAR, SET_TITLE, SIDEBAR_STATUS } from './types'

export const sidebar_status = () => {
  return { type: SIDEBAR_STATUS }
}

export const toggle_sidebar = () => {
  return { type: TOGGLE_SIDEBAR }
}

export const set_title = title => {
  return { type: SET_TITLE, payload: title }
}
