import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function Shelf(props){
    const [showMore, setShowMore] = useState(true);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return(
        <div className="container">
            <div className="row">
                {showMore ? props.books.slice(0, 4).map((b) => <Link className="card pt-2 hover" style={{width: "12rem", height: '30rem', marginRight: 20, marginBottom: 20, background: '#222', textDecoration: 'none', color: '#0dcaf0'}} key={b.id} to={`/book/${b.id}`}><Card book={b}  /></Link>) :
                            props.books.map((b) => <Link className="card pt-2 hover" style={{width: "12rem", height: '30rem', marginRight: 20, marginBottom: 20, background: '#222', textDecoration: 'none', color: '#0dcaf0'}} key={b.id} to={`/book/${b.id}`}><Card book={b}  /></Link>)}
                {(props.books.length >= 4) ? <div onClick={toggleShowMore} style={{cursor: 'pointer'}}>{showMore ? '...Show More' : ' Show Less'}</div> : <></>}            
            </div>
        </div>
    );
}
  

const Card = (props) => {
    
    return (
        <div>
            <img src={ props.book.volumeInfo.imageLinks === undefined ? "" : `${props.book.volumeInfo.imageLinks.thumbnail}` } className="card-img-top" alt="..." style={{height: 250}}/>
            <div className="card-body">
                <h5 className="card-title">{props.book.volumeInfo.title}</h5>
                <p>{props.book.volumeInfo.authors}</p>
                {/* <p>{props.book.volumeInfo.categories}</p>
                <p>{props.book.volumeInfo.language}</p> */}
            </div>
        </div>
    );
} 