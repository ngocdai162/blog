import {createSlice} from "@reduxjs/toolkit";
const editFlagSlice = createSlice({
    name: 'editFlag',
    initialState: true,
    reducers: {
        hideEditButton(state,action) {
            console.log(action.payload)
            state = action.payload;
        }
    }
})
export const {hideEditButton} =  editFlagSlice.actions;
export default editFlagSlice.reducer;