import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import ListPost from './component/container/ListPost';
import styled from 'styled-components';
import UserEdit from './component/container/UserEdit';

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
        <UserEdit/>
        <Footer/>
      </BlogStyled>
    </div>
  );
}
export default App;
