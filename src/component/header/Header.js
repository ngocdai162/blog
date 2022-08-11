import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
    display: flex ;
    width: 100%;
    padding-bottom: 20px;
    flex-direction:  column ;
    align-items:center ;
    border-bottom: 1px solid #fff;
    & p:first-child {
        text-align: end ;
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
    return (
        <HeaderStyled>
            <p>Edit</p>
            <Avatar>
                <img src="../../avt/avt-1.jpg"/>
            </Avatar>
            <Info>
                <span>Coca</span>
                <span>Like drinking coca</span>
            </Info>
        </HeaderStyled>
    )
}
export default Header;