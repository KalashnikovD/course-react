import './contacts.scss';
import Forms from '../forms/Forms';
import TitleContainer from '../titleContainer/TitleContainer'

function Contacts(){
    return(
        <div className='inside-page-wrapper'>
            <div className='center'>
                <TitleContainer title={"Contacts Page"}/>
                <Forms/>
            </div>
        </div>
    )
}

export default Contacts;