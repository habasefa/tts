import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCISqC43N0F5NF5WYZakYujMQRCUWGLqXA',
  authDomain: 'profile-img-temaribet.firebaseapp.com',
  projectId: 'profile-img-temaribet',
  storageBucket: 'profile-img-temaribet.appspot.com',
  messagingSenderId: '336898514188',
  appId: '1:336898514188:web:c6520440b739f1b37cfd29',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
