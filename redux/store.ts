import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import tutorReducer from './tutorSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from './storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const tutorPersistConfig = {
  key: 'tutor',
  version: 1,
  storage,
}
const userpersistedReducer = persistReducer(persistConfig, userReducer)
const tutorPersistedReducer = persistReducer(tutorPersistConfig, tutorReducer)

const store = configureStore({
  reducer: { user: userpersistedReducer, tutor: tutorPersistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store

// export default configureStore({
//   reducer: {
//     user: persistedReducer,
//   },
// })
