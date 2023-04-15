import './promo.scss';
import imagePromotion from '../../media/promotion.jpg';

function Promotion(){
    return(
        <div className="promotion">
                    <div className="promotion-container">
                        <div className="promotion__image">
                            <img src={imagePromotion} alt="Promotion img"/>
                        </div>
                        <p className="promotion__description">
                            <span>Mangata and Gallo Promotion</span>
                        </p>
                    </div>
        </div>
    )
}

export default Promotion;