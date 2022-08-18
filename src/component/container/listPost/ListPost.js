import React from "react";
import {Link} from 'react-router-dom'
import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Post from "./Post";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ListPostStyled = styled.div`
       height: 70%;
       width: 100%;
       padding-top: 20px;
       display: flex;
       flex-direction: column ;
       justify-content: space-between;
       h3 {
         color: #584316;
         margin: 0px;
       }
    `;
const PostsStyled = styled.div`
    height: 80%;
    overflow-y: scroll ;
    &::-webkit-scrollbar {
    display: none;
}
   
` 
const AddPostButtonStyled = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center; ;
    height: 20%;
    span {
        color: RGB(159, 67, 37);
        cursor: pointer;
        font-size: 24px;
        &:hover {
        color: #fff;
        }
    }
`

const ListPost = () => {
    const postsData = useSelector(state => state.posts.posts);
    return (
        <ListPostStyled>
          <h3>List post</h3>
          <PostsStyled >
            {postsData.map(post => (
                <Post title = {post.title} content = {post.content} id = {post.id}/>
            ))}
          </PostsStyled>
           <AddPostButtonStyled>
            <Link to ='/postAdd'>
              <PlusCircleOutlined />
            </Link>
           </AddPostButtonStyled>
        </ListPostStyled>
    )
}
export default ListPost;