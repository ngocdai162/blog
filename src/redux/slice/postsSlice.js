import { createSlice } from "@reduxjs/toolkit";
const postsSlice =  createSlice({
    name: "posts",
    initialState:
    {
        posts :  
        [
            { 
               id:"0",
               title: "Example",
               content:"To only hide the vertical scrollbar, or only the horizontal scrollbar, use overflow-y or overflow-x:"
            }
        ]
    }
     
    ,
    reducers: {
        addPost:(state,action) => { 
            state.posts.push(action.payload)
        },
        deletePost(state,action) {
            console.log(action.payload)
            state.posts = state.posts.pop();
            console.log(state.post)
        }
    }
})
export const {addPost,deletePost} = postsSlice.actions;
export default postsSlice.reducer;