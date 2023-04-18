import Nav from "./nav/Nav";
import './header.scss';
import { useDataContext } from "../provider/Provider";

function Header(props){
    const {data} = useDataContext();
    return(
        <header>
            <div className="header-wrapper">
                <div className="center">
                    <div className="header-logo">
                        <span><img src={data.Logo.Src} alt={data.Logo.Alt}/></span>
                    </div>
                </div>    
                <Nav/>                
            </div>                
        </header>
    )
}

export default Header;