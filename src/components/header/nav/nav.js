import './nav.scss';
import { useDataContext } from '../../provider/Provider';


function Nav(props) {
    const {data} = useDataContext();
    const navigationArr = data.SectionMenu.Links;
    const navigationItems = navigationArr.map((element) => {
        return <li key={element.Id}><span>{element.Name}</span></li>
    });


    return (
            <div className="header-nav">
                        <span className="icon-drop-navigation"><span></span></span>                        
                        <nav>
                            <ul>
                                {navigationItems}
                            </ul>
                        </nav>                        
                    </div>
    
    )
}

export default Nav;