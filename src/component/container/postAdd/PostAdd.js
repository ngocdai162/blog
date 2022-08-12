import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { Input } from 'antd';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slice/postsSlice";
import { hideEditButton } from "../../../redux/slice/editFlagSlice";
const PostAddStyled = styled.div` 
    height: 70%;
    width: 100%;
    position: relative ;
    p {
        font-size: 14px ;
        color: #fff;
    }
    textarea{
        width: 100%;
        border-radius: 8px;
        outline: none ;
        border: 0px !important;
        padding: 5px;
        font-size: 12px ;
        color: #333;
        overflow-y: scroll !important;
        &::-webkit-scrollbar {
          display: none;
        }
    }
    & div:last-child {
        width: 100%;
        position: absolute; 
        bottom: 0px;
        display: flex;
        justify-content: flex-end ;
        align-items: center ;
        button {
          background-color: #a97e25 ;
          padding: 10px 20px;
          font-size: 16px ;
          border: none;
          border-radius: 5px;
            &:hover {
              background-color: #936c1a ;
              cursor: pointer;
            }
        }
        & button:first-child {
          margin-right: 10px;
        }
    }
    
`
const PostAdd = () => {
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const [titleValue,setTitleValue] = useState()
    const [contentValue,setContentValue] = useState()
    const handleChangeTitle = (e) => {
        setTitleValue(e.target.value)
    }
    const handleChangeContent = (e) => {
        setContentValue(e.target.value)
    }
    const handleAdd = () => {
        dispatch(addPost({
            title: titleValue,
            content: contentValue
        }))
    }
    return (
        <PostAddStyled>
            <p>Title</p>
            <TextArea rows={3} value = {titleValue} onChange = {handleChangeTitle}/>
            <p>Content</p> 
            <TextArea rows={8} value = {contentValue} onChange = {handleChangeContent}/>
            <div>
              <Link to ='/listPost'>
                <button onClick={handleAdd}>Add</button>
              </Link>
              <Link to = '/listPost'>
                 <button>Cancel</button>
              </Link>
            </div>
        </PostAddStyled>
    )
}
export default PostAdd;