import { TOGGLE_SIDEBAR, SIDEBAR_STATUS } from './types'

export const sidebar_status = () => {
  return { type: SIDEBAR_STATUS }
}

export const toggle_sidebar = () => {
    return { type: TOGGLE_SIDEBAR }
}