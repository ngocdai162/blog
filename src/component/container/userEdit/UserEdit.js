import React, { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import styled from "styled-components";
import { Input } from "antd";
import Avatar from "../.././avt/Avatar";
import { Button, Form } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { editInfo } from "../../../redux/slice/userSlice";
import { setEditButton } from "../../../redux/slice/editFlagSlice";
import UploadImage from "./UploadImage";


const UserInfoStyled = styled.div`
   width: 100%;
   height: 75%;
   position: relative;
   h3 {
    color: #584316;
   }
   .upload-error {
     font-size: 12px;
     color: #b91010;
   }
   .ant-form {
      height: 80%;
      label {
        font-size: 14px ;
        color: #584316;
      }
      input{
        margin-top: 10px;
        width: 100%;
        outline: none ;
        border: none;
        border-radius: 10px;
        padding: 5px;
        font-size: 14px ;
        color: #584316;
      }
      & input:first-child {
        margin-bottom: 10px;
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
      & button:last-child {
        right: 90px;
      }
    }
`;
const UserInfoButtonStyled = styled.div`
    width: 100%;
    display: flex ;
    justify-content: flex-end;
    position: absolute ;
    bottom: 20px;
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
`;
const UserDetail = styled.div`
     display: flex ;
     justify-content: space-between ;
     align-items: center ;
     padding: 10px 0;
     p {
        margin: 0px;
        font-size: 14px ;
        color: #fff;
     }
     input {
        height: 30px;
        width: 70%;
        font-size: 14px;
        outline: none; 
        border: none;
        border-radius: 8px; 
        padding: 0 10px;
     }
`;
const AvtChoice = styled.div`
   
    p {
        margin: 0px 0px 20px 0px;
        font-size: 14px ;
        color: #fff;
    }
    ul{
        list-style:none ;
        padding: 0px;
        div {
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
            &:hover {
                opacity: 0.5 ;
                cursor: pointer;
            }
        }
    }
`;
const UserEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.user);
    const avtArray = useRef();
    const [nameValue,setNameValue] = useState();
    const [descriptionValue,setDescriptionValue] = useState();
    const [urlAvatar,setUrlAvatar] = useState(userInfo.url);
    // useEffect(()=> {
    //     setUrlAvatar(userInfo.url)
    // },[])
    console.log('url')
    console.log(urlAvatar)
    console.log(userInfo.url)
    const userInfoUpdate = {
        name: nameValue,
        description: descriptionValue,
        url: urlAvatar,
    }
    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
    }
    const getAvatar = (data) => {
        setUrlAvatar(data)
        // return data;
    }
    const onFinish = (values) => {
            console.log(userInfoUpdate)
            dispatch(editInfo(userInfoUpdate));
            navigate('/listPost');
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleCancelClick = () => {
        navigate('/listPost');
    }

    return (
        <UserInfoStyled>
            <h3>Edit info</h3>
            {/* <UploadImage width = '100'/> */}
            <UploadImage width = '100' event = {getAvatar}/>
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
             label="Name"
             name="name"
             rules={[
              {
               required: true,
               message: 'Please input name!',
              },
             ]}
            >
              <Input value={nameValue} onChange = {handleNameChange}/>
            </Form.Item>

            <Form.Item
             label="Description"
             name="description"
             rules={[
              {
                required: true,
                message: 'Please input description!',
              },
             ]}
            >
               <Input value={descriptionValue}  onChange = {handleDescriptionChange}/>
            </Form.Item>
            <Form.Item
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
            >
             <div className = 'form-button'>
               <Button type="primary" htmlType="submit">
                 Save
               </Button>
               <Button onClick = {handleCancelClick}>Cancel</Button>
             </div>
            
            </Form.Item>
           </Form>
          
        </UserInfoStyled>

    )
}
export default UserEdit;