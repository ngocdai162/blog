import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import ListPost from './component/container/ListPost';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListPost/>
      <Footer/>
    </div>
  );
}

export default App;
