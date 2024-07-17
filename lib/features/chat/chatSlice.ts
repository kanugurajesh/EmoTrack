import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChatState {
    user: string;
    message: string;
}

const initialState: ChatState = {
    user: '',
    message: ''
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<string>) => {
            state.message = action.payload; // Assuming action.payload is a string to update the message
        },
        // Add other reducers as needed
    }
});

export const { updateValue } = chatSlice.actions;

export default chatSlice.reducer;