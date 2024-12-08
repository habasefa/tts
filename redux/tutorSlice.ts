import { createSlice } from '@reduxjs/toolkit'

export const tutorSlice = createSlice({
  name: 'tutor',
  initialState: {
    tutor: null,
  },
  reducers: {
    setTutor: (state, action) => {
      //   console.log('tutorSlice', action.payload)
      state.tutor = action.payload
    },
  },
})

export const { setTutor } = tutorSlice.actions

export const selectTutor = (state: any) => state.tutor.tutor

export default tutorSlice.reducer
