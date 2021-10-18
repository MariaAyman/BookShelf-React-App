import Header from '../Components/Header';
import {useHistory, Link} from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return(
        <>
            <Header />
            <div className="container d-flex justify-content-between align-items-end notFound" style={{height: '86vh'}}>
                <div style={{width: '35%'}}>
                    <img src="https://i.imgur.com/e1IneGq.jpg" alt="Jhon Travolta lost Gif" style={{width: '100%'}} />
                </div>
                <div style={{width: '65%', height: '100%', padding: '3%', textAlign: 'center'}}>
                    <h1 style={{fontSize: "10rem", fontWeight: 100}}>Oops!</h1>
                    <p>The Page you are looking for doesn't exist or an error occured.</p>
                    <p>404 Error</p>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button className="btn btn-outline-info form-button" type="button" id="button-addon2" onClick={() => history.goBack()}>Go Back</button>
                        <Link to="/" style={{textDecoration: 'none'}}><button className="btn btn-outline-info form-button" type="button" id="button-addon2">Home</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;