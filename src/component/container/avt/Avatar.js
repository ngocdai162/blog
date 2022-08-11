import React from 'react';
import styled from 'styled-components';
const AvatarStyled = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }

`;
const Avatar = (props) =>  {
    return (
        <AvatarStyled >
            <img src={props.src}/>
        </AvatarStyled>
    )
} 
export default Avatar;