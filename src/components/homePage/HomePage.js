import './homepage.scss';
import Promotion from '../promo/Promo';
import ArticlePreview from '../article-preview/ArticlePreview';

function HomePage () {
    return (
        <main>
            <Promotion/>
            <ArticlePreview/>
        </main>
    )
}

export default HomePage;