import './article-preview.scss';

import blogImage1 from "../../media/blog-image-1.jpg"
import blogImage2 from "../../media/blog-image-2.jpg"
import blogImage3 from "../../media/blog-image-3.jpg"

import TitleContainer from "../titleContainer/titleContainer";

function ArticlePreview (){
    return(
        <div className="blogs">
                    <TitleContainer/>
                    <div className="blogs-list">
                        <article>
                            <div className="article-image">
                                <span><img src={blogImage1} alt="article image"/></span>
                            </div>
                            <div className="article-description">
                                <h4>Blog title</h4>
                                <p>Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, weddings and anniversaries. The jewelry company primarily operates online and has a small storefront in Austin, Texas with an atelier attached for browsing. </p>
                                <p className="button button-gray">More</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-image">
                                <span><img src={blogImage2}  alt="article image"/></span>
                            </div>
                            <div className="article-description">
                                <h4>Blog title</h4>
                                <p>Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, weddings and anniversaries.  </p>
                                <p className="button button-gray">More</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-image">
                                <span><img src={blogImage3}  alt="article image"/></span>
                            </div>
                            <div className="article-description">
                                <h4>Blog title</h4>
                                <p>Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, weddings and anniversaries. The jewelry company primarily operates online and has a small storefront in Austin, </p>
                                <span className="button button-gray">More</span>
                            </div>
                        </article>
                    </div>
                    
                </div>
    )
}

export default ArticlePreview;