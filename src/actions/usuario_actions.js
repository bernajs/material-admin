import { GET_USUARIOS } from './types'
import { db } from './index'

const ref = db.collection('usuarios')

export const get_usuarios = () => async dispatch => {
  var data = await ref.get()
  var usuarios = []
  if (data) {
    data.forEach(usuario => {
      usuarios.push({ id: usuario.id, ...usuario.data() })
    })
  }
  dispatch({ type: GET_USUARIOS, payload: usuarios })
}
