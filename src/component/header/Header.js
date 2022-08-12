import React from "react";
import {Routes, Route,Link} from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { hideEditButton } from "../../redux/slice/editFlagSlice";

const HeaderStyled = styled.div`
    display: flex ;
    width: 100%;
    height: 25%;
    padding-bottom: 20px;
    flex-direction:  column ;
    align-items:center ;
    border-bottom: 1px solid #fff;
    
    & a:first-child {
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
`;
const Avatar = styled.div`
    width: 50px;
    height: 50px;
    margin-top: 5px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
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
`;
const Header = () => {
    const userInfo = useSelector(state => state.user);
    const editFlag = useSelector(state => state.editFlag);
    return (
        <HeaderStyled>
            {editFlag && <Link to = '/userEdit'>Edit</Link>}
            <Avatar>
                <img src={userInfo.url}/>
            </Avatar>
            <Info>
                <span>{userInfo.name}</span>
                <span>{userInfo.description}</span>
            </Info>
        </HeaderStyled>
    )
}
export default Header;
