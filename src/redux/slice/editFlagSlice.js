import {createSlice} from "@reduxjs/toolkit";
const editFlagSlice = createSlice({
    name: 'editFlag',
    initialState: true,
    reducers: {
        setEditButton:(state,action) => {
            console.log(action.payload  +  "day")
            state = action.payload;
        },
        hideEditButton: (state,action) => {
            state = false;
        }
        
    }
})
export const {setEditButton, hideEditButton} =  editFlagSlice.actions;
export default editFlagSlice.reducer;