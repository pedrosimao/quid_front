import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from './store'

// Define a type for the slice state
interface WalletStateType {
  wallet: Record<string, unknown> | null
}

// Define the initial state using that type
const initialState: WalletStateType = {
  wallet: null,
}

export const walletSlice = createSlice({
  name: 'wallet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateWallet: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.wallet = action.payload
    },
  },
})

export const { updateWallet } = walletSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWallet = (state: RootState) => state?.wallet

export default walletSlice.reducer
