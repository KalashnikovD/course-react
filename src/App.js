import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Promotion from './components/promo/promo';
import ArticlePreview from './components/article-preview/article-preview';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className='App page-container'>
        <div class="page-wrapper">
          <Header/>
          <main>
              <Promotion/>
              <ArticlePreview/>
          </main>

          <Footer/>
      </div>
    </div>
  )
}

export default App;
