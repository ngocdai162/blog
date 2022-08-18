import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { deletePost } from "../../../redux/slice/postsSlice";
import { v4 as uuidv4 } from 'uuid';
const PostStyled = styled.div`
    position: relative ;
    border: 1px solid #896e1e;
    border-radius: 5px ;
    padding: 5px;
    margin: 10px 0px;
    span {
       margin-top: 5px;
       font-size: 12px ;
       font-weight: 300;
       color: #fff;
    }
    & div:first-child {
        display:  flex ;
        justify-content: space-between ;
        align-items: center ;
        p {
          font-size: 16px ;
          font-weight: 400;
          color: #fff;
          margin: 0px;
        }
        span {
            color: red;
            cursor: pointer;
            &:hover {
                color: #ec6161;
            }
        }

    }
`
const Post = (props) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
       console.log(e.target.parentElement.id +  '  xoa');
        dispatch(deletePost(e.target.parentElement.id));
    }

    return (
        <PostStyled>
            <div>
              <p>{props.title}</p>
              <CloseOutlined id={props.id} onClick = {handleClick}/> 
            </div>
            <span>{props.content}</span>
        </PostStyled>
    )
}
export default Post;