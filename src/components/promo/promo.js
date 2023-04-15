import './promo.scss';
import imagePromotion from '../../media/promotion.jpg';

function Promotion(){
    return(
        <div className="promotion">
                    <div className="promotion-container">
                        <div className="promotion__image">
                            <img src={imagePromotion} alt="Promotion img"/>
                        </div>
                        <a href="#" className="promotion__description" title="Promotion description">
                            <span>Mangata and Gallo Promotion</span>
                        </a>
                    </div>
        </div>
    )
}

export default Promotion;