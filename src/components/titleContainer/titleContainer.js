import './titleContainer.scss';

function TitleContainer (props) {
    return(
        <div className="title-container">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
        </div>
    );
}

export default TitleContainer;
