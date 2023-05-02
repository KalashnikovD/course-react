import './promo.scss';
import { useDataContext } from '../provider/Provider';

function Promotion(){
    const {data} = useDataContext();

    return(
        <div className="center">
            <div className="promotion">
                        <div className="promotion-container">
                            <div className="promotion__image">
                                <img src={data.Promotion.Image.Src} alt={data.Promotion.Image.Alt}/>
                            </div>
                            <p className="promotion__description">
                                <span>{data.Promotion.Title}</span>
                            </p>
                        </div>
            </div>
        </div>
    )
}

export default Promotion;