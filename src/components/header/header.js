import Nav from "./nav/nav";
import './header.scss';
function Header(props){
    console.log(props.nav)
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-logo">
                    <span><img src={props.logo.Src} alt={props.logo.Alt}/></span>
                </div>

                <Nav nav={props.nav}/>
                
            </div>                
        </header>
    )
}

export default Header;