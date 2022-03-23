import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBqvLy50b12XE-xuLotw_T2_k9bF99gg4g',
  authDomain: 'temaribet-profile-storage.firebaseapp.com',
  projectId: 'temaribet-profile-storage',
  storageBucket: 'temaribet-profile-storage.appspot.com',
  messagingSenderId: '1081544046642',
  appId: '1:1081544046642:web:fe9e6be19862b89054a42b',
  measurementId: 'G-03SN101FLW',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
