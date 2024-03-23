import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems:[] }

export const bookSlice = createSlice ({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const existingIndex = state.bookItems.findIndex(item => item.id === action.payload.id);
            if (existingIndex !== -1) {
                state.bookItems[existingIndex] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action:PayloadAction<string>)=>{
            const remainItems = state.bookItems.filter( obj => {
                return ( (obj.id !== action.payload) )
            })
            state.bookItems = remainItems
        }
    }

})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer  