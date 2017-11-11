import * as firebase from 'firebase'
import 'firebase/firestore'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDIiM_OjwseiDHTBtogIMRB0z-xr1w9bMo',
  authDomain: 'encuesta-f13f6.firebaseapp.com',
  databaseURL: 'https://encuesta-f13f6.firebaseio.com',
  projectId: 'encuesta-f13f6',
  storageBucket: 'encuesta-f13f6.appspot.com',
  messagingSenderId: '940588493733'
}
firebase.initializeApp(config)
const db = firebase.firestore()
export default db
