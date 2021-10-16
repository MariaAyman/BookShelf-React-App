import Header from '../Components/Header';
import NotFound from '../Pages/NotFound';

import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../redux/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        changeShelf: (id, shelfNo) => dispatch(actions.changeShelf(id, shelfNo))
    }
}

const BookDetails = (props) => {
    const history = useHistory();

    console.log("BookDetails.props, ", props);
    const book = props.books.find(b => b.id === parseInt(props.match.params.id));
    console.log(book);
    console.log("param id", props.match.params.id, typeof props.match.params.id);
    
    if(book === undefined){
        return(
            <NotFound />
        );
    }

    const handleShelf = (no) => {
        console.log(no);
        props.changeShelf(book.id, no);
    }

    return(
        <>
        <Header />
        <div className="container d-flex flex-column align-items-center p-4 mt-4 content-box">
        <button type="button" className="btn btn-outline-info mt-2 align-self-start form-button" onClick={() => history.goBack()}>Back</button>
            {/* <div className='overlay'></div> */}
            <img src={book.cover} alt="book cover" className="w-25 m-2 " />
            <h1 className="m-2">{book.title}</h1>
            {book.series && <p className="m-2">{book.series}</p>}
            <h2 className="m-2">{book.author}</h2>
            <p className="m-2">{book.rate}</p>
            <div className="my-3" style={{cursor: 'pointer'}}>
                <select className='form-select' aria-label='Default select example' value={book.shelfNo} onChange={e => handleShelf(e.target.value)} style={{backgroundColor: '#111', color: '#0dcaf0'}}>
                    <option value={2} >Want to Read</option>
                    <option value={1} >Currently Reading</option>
                    <option value={3} >Read</option>
                    <option value={0} >None</option>
                </select>
            </div>
            <div className='container m-2 p-3 w-50 content-box'>
                {book.description}
            </div>
        </div>
        </>
    );
}

export default connect(null, mapDispatchToProps)(BookDetails);