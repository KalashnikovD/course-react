import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';


function App(props) {
  console.log(props.data.Logo)
  return (
    <div className='App page-container'>
        <div className="page-wrapper">
          <Header logo={props.data.Logo} nav={props.data.SectionMenu}/>
          <Main/>
          <Footer/>
      </div>
    </div>
  )
}

export default App;
