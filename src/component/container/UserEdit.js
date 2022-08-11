import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import Avatar from './avt/Avatar'

const avatarData = [
    "../../avt/avt-1.jpg",
    "../../avt/avt-2.jpg",
    "../../avt/avt-3.jpg",
    "../../avt/avt-4.jpg",
    "../../avt/avt-5.jpg", 
    "../../avt/avt-2.jpg",
    "../../avt/avt-3.jpg",
    "../../avt/avt-4.jpg",
    "../../avt/avt-5.jpg"
]
const UserInfoStyled = styled.div`
   width: 100%;
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
    padding-top: 20px;
    p {
        margin: 0px 0px 20px 0px;
        font-size: 14px ;
        color: #fff;
    }
    div{
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
    return (
        <UserInfoStyled>
            <UserDetail>
                <p>Name</p>
                <Input placeholder="User name" />
            </UserDetail>
            <UserDetail>
                <p>Description</p>
                <Input placeholder="Description"/>
            </UserDetail>
            <AvtChoice>
                <p>Avatar</p>
                <div>
                    {avatarData.map((avatar) => (
                        <Avatar src={avatar}/>
                    ))}
                </div>
            </AvtChoice>
        </UserInfoStyled>
    )
}
export default UserEdit;