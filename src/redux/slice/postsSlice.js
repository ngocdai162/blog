import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
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
        deletePost:(state,action) => {
            state.posts = state.posts.filter((post) =>{
                if (post.id ==  action.payload){
                    return false;
                }
                return true;
            })
            console.log(state.posts);
        
        }
    }
})
export const {addPost,deletePost} = postsSlice.actions;
export default postsSlice.reducer;