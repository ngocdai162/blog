import React from "react";
import {Routes, Route,Link, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setEditButton ,hideEditButton} from "../../redux/slice/editFlagSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const HeaderStyled = styled.div`
    display: flex ;
    width: 100%;
    height: 25%;
    padding-bottom: 20px;
    flex-direction:  column ;
    align-items:center ;
    border-bottom: 1px solid #fff;
    
    & span:first-child {
        text-align: end ;
        text-decoration: none;
        width: 100%;
        color: #9b2b2b;
        font-size: 14px;
        padding: 0px;
        margin: 0px;
        &:hover {
            color: #fff;
            cursor: pointer;
        }
    }
    p {
        margin: 0px;
    }
`;
const AvatarUser = styled.div`
    width: 50px;
    height: 50px;
    margin-top: 5px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
    span {
        width: 100%;
        height: 100%;
        svg {
            width: 100% !important;
            height: 100% !important;
            color: #fff;
        }
    }
`;
const Info = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        color: #fff;
        font-size: 14px;
        font-weight: 300;
    }
    & span:first-child {
        font-size: 16px;
        font-weight: 400;
    }
    h4 {
        margin: 0px;
       color: #584316;
    }
`;
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    const editFlag = useSelector(state => state.editFlag);
    const postsData = useSelector(state => state.posts.posts);
    const handleClickEdit = () => {
        // dispatch(setEditButton(false));
        // dispatch(hideEditButton());
        navigate('/userEdit');

    }

    return (
        <HeaderStyled>
            {editFlag &&  <span onClick={handleClickEdit}>Edit</span>}
            <AvatarUser>
                {(userInfo.url!=null && userInfo.url !='') ? <img src={userInfo.url}/>
                : <Avatar size={64} icon={<UserOutlined />} />}
               
                
            </AvatarUser>
            <Info>
                <h4>{userInfo.name}</h4>
                <span>{userInfo.description}</span>
            </Info>
        </HeaderStyled>
    )
}
export default Header;
