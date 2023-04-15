import Nav from "./nav/nav";
import logo from "../../media/logo.png"
import './header.scss';
function Header(){
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-logo">
                    <a href="#" title=""><img src={logo} alt="Mangata and Gallo"/></a>
                </div>              

                <Nav/>
                
            </div>                
        </header>
    )
}

export default Header;