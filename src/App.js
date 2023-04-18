import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App(props) {
  console.log(props.data.Logo)
  return (
    <div className='App page-container'>
        <div className="page-wrapper">     
            <Header logo={props.data.Logo} nav={props.data.SectionMenu}/>
            <Main data={props.data}/>
            <Footer/>
      </div>
    </div>
  )
}

export default App;
