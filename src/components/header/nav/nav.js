import './nav.scss';
import { useDataContext } from '../../provider/Provider';
import {Link} from 'react-router-dom';
import { useState } from 'react';
function Nav(props) {

    const [navState, setNavState] = useState(false);

    const changeNavState = ()=> {
        setNavState(!navState);
    }

    const {data} = useDataContext();
    const navigationArr = data.SectionMenu.Links;
    const navigationItems = navigationArr.map((element) => {
        return <li key={element.Id}><Link to={element.Url}>{element.Name}</Link></li>
    });

    return (
            <div className="header-nav">
                <div className="center">
                    <span className={"icon-drop-navigation" +  (navState ? " active" : "")} onClick={changeNavState} ><span></span></span>                        
                        <nav>
                            <ul>
                                {navigationItems}
                            </ul>
                        </nav>       
                </div>                                         
            </div>    
    )
}

export default Nav;