import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { Input } from 'antd';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
import { addPost } from "../../../redux/slice/postsSlice";
import { hideEditButton } from "../../../redux/slice/editFlagSlice";
import { v4 as uuidv4 } from 'uuid';
import { Button, Checkbox, Form } from 'antd';
const PostAddStyled = styled.div` 
    height: 70%;
    width: 100%;
    position: relative ;
    p {
        font-size: 14px ;
        color: #fff;
        color: #584316;

    }
    h3 {
      color: #584316;
      margin-bottom: 5px;
    }
    /* textarea{
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
    } */
    .ant-form {
      height: 80%;
      label {
        font-size: 14px ;
        color: #584316;
      }
      textarea {
        margin-top: 10px;
        width: 100%;
        outline: none ;
        border: none;
        border-radius: 10px;
        padding: 5px;
        font-size: 14px ;
        color: #584316;
        
      }
      .ant-form-item-explain-error {
        font-size: 12px;
        color: #b91010;
      }
      button {
        background-color: #a97e25 ;
        padding: 10px 20px;
        font-size: 16px ;
        border: none;
        border-radius: 5px;
        position: absolute;
        right: 0px;
        bottom: 0px;
          &:hover {
            background-color: #936c1a ;
            cursor: pointer;
        }
      }
    }
    
`
const PostAdd = () => {
    const navigate = useNavigate();
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
      if(titleValue !='' && contentValue !='') {
        dispatch(addPost({
          id: uuidv4(),
          title: titleValue,
          content: contentValue
      }))
      navigate('/listPost');
      }
    }
    const onFinish = (values) => {
      console.log('Success:', values);
      handleAdd();
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
    <PostAddStyled>
      <h3>Create post</h3>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input title!',
          },
        ]}
      >
          <TextArea rows={2} value = {titleValue} onChange = {handleChangeTitle}/>
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please input content!',
          },
        ]}
      >
         <TextArea rows={8} value = {contentValue} onChange = {handleChangeContent}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
      </Form>
    </PostAddStyled>
    )
}
export default PostAdd;