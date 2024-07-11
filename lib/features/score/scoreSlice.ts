import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScoreState {
  value: number
}

const initialState: ScoreState = {
  value: 0,
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { incrementByAmount } = scoreSlice.actions

export default scoreSlice.reducer
