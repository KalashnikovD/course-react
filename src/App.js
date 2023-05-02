import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import ArticlePage from './components/articlePage/ArticlePage';
import Contacts from './components/contacts/Contacts';
import Products from './components/products/Products';
import Information from './components/information/InformationPage';

function App(props) {
  return (
    <div className='App page-wrapper'>   
            <Header/>
            <main>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/blog/article/*' element={<ArticlePage/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/info' element={<Information/>}/>
                </Routes>
            </main>
            <Footer/>
    </div>
  )
}

export default App;
