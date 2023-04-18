import './footer.scss';
import { useDataContext } from '../provider/Provider';


function Footer(){

    const {data} = useDataContext();

    return(
        <footer>
                <div className="footer-wrapper">
                    <div className="footer-wrapper__logo"><img src={data.LogoFooter.Src}  alt="{data.LogoFooter.Alt}"/></div>
                    <div>{data.Copyrights}</div>
                </div>
        </footer>
    )
}

export default Footer;