import './nav.scss';

function Nav(props) {
    console.log(props.nav)
    const navigationArr = props.nav.Links;
    const navigationItems = navigationArr.map((element) => {
        return <li key={element.Id}><span>{element.Name}</span></li>
    });


    return (
        <div class="header-nav">
                        <span class="icon-drop-navigation"><span></span></span>                        
                        <nav>
                            <ul>
                                {navigationItems}
                            </ul>
                        </nav>                        
                    </div>
    )
}

export default Nav;