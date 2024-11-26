import { useState , useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import  routers  from './router'; // 引入路由配置
import './styles/App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import FooterControl from './components/FooterControl';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="main-content">
          {routers}
        </div>
    </BrowserRouter>
    <Footer></Footer>
    </div>
  )
}

export default App
