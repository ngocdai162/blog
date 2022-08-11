import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const FooterStyled = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center ;
    position: absolute ;
    bottom: 20px;
    span {
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        &:hover {
            color: RGB(159, 67, 37);
        }
    }
    button {
        background-color: #936c1a ;
        border: none;
        border-radius: 5px;
        height: 30px;
        &:hover {
          background-color: #a97e25 ;
          cursor: pointer;
        }
        span {
            color: #fff;
            font-size: 16px ;
            font-weight: 400 ;
            padding: 0px 20px;
            &:hover {
                color: #fff;
            }
        }

    }
`;
const Footer = () => {
    const [editFlag,setEditFlag] = useState(true)
    return (
        <FooterStyled>
            {editFlag ? <Button type="primary">Save</Button> : <PlusCircleOutlined />}
        </FooterStyled>
    )
}
export default Footer;