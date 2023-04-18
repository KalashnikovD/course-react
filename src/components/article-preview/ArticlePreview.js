import './article-preview.scss';
import TitleContainer from "../titleContainer/TitleContainer";
import { useDataContext } from '../provider/Provider';
import { Link } from 'react-router-dom';

function ArticlePreview (){
    const {data} = useDataContext();
    
    const blogArr = data.Listings.Lists;
    const blogItem = blogArr.map((item, index) => {
        const itemObj = item.Items[0];
        return (
                <article key={itemObj.ItemId}>
                            <div className="article-image">
                            <span><img src={itemObj.Image.Src} alt={itemObj.Image.Alt}/></span>
                            <Link to={itemObj.Url}></Link>
                            </div>
                            <div className="article-description">
                                <h4>{itemObj.Title}</h4>
                                <p>{itemObj.Description} </p>
                                <Link className="button button-gray" to={itemObj.Url}>More</Link>
                            </div>
                        </article>
        )
    });

    return(
        <div className="blogs">
            <div className="center">
                    <TitleContainer title={data.Listings.Title} description={data.Listings.TitleDescription}/>
                    <div className="blogs-list">
                        {blogItem}
                    </div>
            </div>        
        </div>
    )
}

export default ArticlePreview;