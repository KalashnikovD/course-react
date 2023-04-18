import './article-preview.scss';
import TitleContainer from "../titleContainer/TitleContainer";
import { useDataContext } from '../provider/Provider';

function ArticlePreview (){
    const {data} = useDataContext();
    
    const blogArr = data.Listings.Lists;
    const blogItem = blogArr.map((item, index) => {
        const itemObj = item.Items[0];
        return (
                <article key={itemObj.ItemId}>
                            <div className="article-image">
                                <span><img src={itemObj.Image.Src} alt={itemObj.Image.Alt}/></span>
                            </div>
                            <div className="article-description">
                                <h4>{itemObj.Title}</h4>
                                <p>{itemObj.Description} </p>
                                <p className="button button-gray">More</p>
                            </div>
                        </article>
        )
    });

    return(
        <div className="blogs">
                    <TitleContainer title={data.Listings.Title} description={data.Listings.TitleDescription}/>
                    <div className="blogs-list">
                        {blogItem}
                    </div>
                    
                </div>
    )
}

export default ArticlePreview;