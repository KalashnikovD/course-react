import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App(props) {
  return (
    <div className='App page-container'>
        <div className="page-wrapper">     
            <Header/>
            <Main data={props.data}/>
            <Footer/>
      </div>
    </div>
  )
}

export default App;
