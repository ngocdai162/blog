import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import Avatar from 'react-avatar-edit';
const UploadImageStyled = styled.div`
    display: flex;
    justify-content: space-between ;
    label {
       color: $while-color !important;
       padding: 0 30px !important;
       font-size: 12px !important ;
    }
    .gaCeUP {
        div  {
            div {
                border-color: red !important;
            }
        }
    }
`

const UploadImage = (props) => {
    const [src,setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const onClose = () => {
        setPreview(null);
    }
    const onCrop =  view => {
        setPreview(view);
    }
    console.log(preview);
    useEffect(()=> {
        props.event(preview);
    },preview)
    return (
        <UploadImageStyled>
            <Avatar
                width={props.width}
                height= {props.width}
                onCrop={onCrop}
                onClose = {onClose}
                src={src}
            />
            {preview && <img className = {props.type} src={preview} style={{
                width: `${props.width}px`,
                height: `${props.width}px`
            }}/>}
        </UploadImageStyled>
    );
};

export default UploadImage;