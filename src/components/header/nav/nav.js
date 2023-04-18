import './nav.scss';
import { useDataContext } from '../../provider/Provider';
import {Link} from 'react-router-dom';
function Nav(props) {
    const {data} = useDataContext();
    const navigationArr = data.SectionMenu.Links;
    const navigationItems = navigationArr.map((element) => {
        return <li key={element.Id}><Link to={element.Url}>{element.Name}</Link></li>
    });

    return (
            <div className="header-nav">
                <div className="center">
                    <span className="icon-drop-navigation"><span></span></span>                        
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