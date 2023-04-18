import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import ArticlePage from './components/articlePage/ArticlePage';

function App(props) {
  return (
    <div className='App page-wrapper'>   
            <Header/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/blog' element={<ArticlePage/>}/>
              </Routes>
            <Footer/>
    </div>
  )
}

export default App;
