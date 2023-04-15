import './footer.scss';
import logoFooter from "../../media/logo-footer.png";


function Footer(){
    return(
        <footer>
                <div className="footer-wrapper">
                    <div className="footer-wrapper__logo"><img src={logoFooter}  alt=""/></div>
                    <div>© Mangata and Gallo 2023</div>
                </div>
        </footer>
    )
}

export default Footer;