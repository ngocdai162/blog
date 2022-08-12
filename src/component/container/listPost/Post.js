import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { deletePost } from "../../../redux/slice/postsSlice";
const PostStyled = styled.div`
    position: relative ;
    border: 1px solid #888;
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
    const handleClick = () => {
        dispatch(deletePost(props.id))
    }
    return (
        <PostStyled>
            <div>
              <p>{props.title}</p>
              <CloseOutlined  /> 
            </div>
            <span>{props.content}</span>
        </PostStyled>
    )
}
export default Post;