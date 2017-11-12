import { GET_USUARIOS } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USUARIOS:
      return action.payload
      break
    default:
      return state
      break
  }
}
