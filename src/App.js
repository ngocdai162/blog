import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './component/header/Header';
import styled from 'styled-components';
import ListPost from './component/container/listPost/ListPost';
import UserEdit from './component/container/userEdit/UserEdit';
import PostAdd from './component/container/postAdd/PostAdd';
import UploadImage from './component/container/userEdit/UploadImage';



const BlogStyled = styled.div`
 width: 30%;
 height: 90%;
 display: flex;
 flex-direction: column ;
 align-items:center ;
 position: relative ;
 padding: 20px;
 background-color: #d9981e ;
`;

function App() {
  return (
    <div className="App">
      <BlogStyled>
        <Header/>
        <Routes>
          <Route path="/userEdit" element = {<UserEdit/>}/>
          <Route path="/listPost" element = {<ListPost/>}/>
          <Route path="/postAdd" element = {<PostAdd/>}/>
          <Route path="/uploadImage" element = {<UploadImage width='150'/>}/>
        </Routes>
      </BlogStyled>
    </div>
  );
}
export default App;
