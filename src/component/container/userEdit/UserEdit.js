import React, { useEffect, useRef, useState } from "react";
import {Routes, Route,Link} from 'react-router-dom';
import styled from "styled-components";
import { Input } from "antd";
import Avatar from "../.././avt/Avatar";
import { useDispatch } from "react-redux";
import { editInfo } from "../../../redux/slice/userSlice";
import Button from "antd/lib/button";

const avatarData = [
    "https://gamek.mediacdn.vn/133514250583805952/2020/9/11/photo-1-1599790042857305841826.jpg",
    "https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb",
    'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-reveal-pyke-bloodharbor-ripper/en_US/4cc51c48fc4e185fb5409def2b3649a84b0d4339/assets/downloads/wallpapers/PYKE_WALLPAPER_LOGO_1920X1200.jpg',
    "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3dafcae87ee7c45a/60ee0e8fa9af29474648beef/Katarina_0.jpg",
    "https://lienminh.garena.vn/lo-dien-kaisa/downloads/wallpapers/kaisa-1280x1024.jpg", 
    "https://lienminh.mobi/wp-content/uploads/2020/10/camile-toc-chien.jpg",
    "https://cdn.tgdd.vn/2020/09/content/galaxy-slayer-zed-splash-art-lol-uhdpaper.com-4K-64-800x450.jpg",
    "https://image.thanhnien.vn/w1024/Uploaded/2022/xdrkxrvekx/2021_12_20/ahri-42-1024.jpg",
    "https://lolwildriftbuild.com/wp-content/uploads/2020/10/Graves_portrait.jpg"
   

]
const UserInfoStyled = styled.div`
   width: 100%;
   height: 75%;
   position: relative;
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
    padding-top: 20px;
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
    // const handleAvatarClick = (e) => {
    //   const imgAvts = avtArray.current.querySelectorAll("li div img");
    //   if(imgAvts) {
    //     imgAvts.forEach(imgAvt => {
    //         if(imgAvt.classList.contains("avt-active")){
    //             imgAvt.classList.remove("avt-active")
    //         }
    //         imgAvt.addEventListener("click", handleAvatarClick);
    //     });
    //   }
    //      e.target.classList.add('avt-active');
    // }
    const dispatch = useDispatch()
    const avtArray = useRef();
    const [nameValue,setNameValue] = useState();
    const [descriptionValue,setDescriptionValue] = useState();
    const [urlAvatar,setUrlAvatar] = useState();
    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
        console.log(e.target.value)
    }
    const userInfo = {
        name: nameValue,
        description: descriptionValue,
        url: urlAvatar
    }
    const handleClickSave = () => {
        dispatch(editInfo(userInfo))
    }
    const handleAvtClick = (e) => {
       console.log(e.target)
       setUrlAvatar(e.target.src);
    }
    return (
        <UserInfoStyled>
            <UserDetail>
                <p>Name</p>
                <Input placeholder="User name"  onChange={handleNameChange} value={nameValue}/>
            </UserDetail>
            <UserDetail>
                <p>Description</p>
                <Input placeholder="Description" value={descriptionValue} onChange = {handleDescriptionChange}/>
            </UserDetail>
            <AvtChoice>
                <p>Avatar</p>
                <ul ref={avtArray}>
                    {avatarData.map((avatar) => (
                        <li onClick = {handleAvtClick}>
                            <Avatar src={avatar} />
                        </li>
                    ))}
                </ul>
            </AvtChoice>
            <UserInfoButtonStyled>
              <Link to = '/listPost'>
                 <button  onClick={handleClickSave}>Save</button>
              </Link>
              <Link to = '/listPost'>
                 <button>Cancel</button>
              </Link>
            </UserInfoButtonStyled>
          
        </UserInfoStyled>
    )
}
export default UserEdit;