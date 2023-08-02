import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addAge: (state, action) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAge } = counterSlice.actions

export default counterSlice.reducer