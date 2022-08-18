import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name:"Coca",
  description:"Like drinking coca",
  url:"https://gamek.mediacdn.vn/133514250583805952/2020/9/11/photo-1-1599790042857305841826.jpg"
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editInfo(state,action) {
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.url = action.payload.url;
        }
    }
})

export const {editInfo} = userSlice.actions;
export default userSlice.reducer;