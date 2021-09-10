import BookCard from './BookCard.js';

import {useState} from 'react';
import {Link} from 'react-router-dom';

function BookList(props) {
    const [showMore, setShowMore] = useState(true);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="container">
            <div className="row">
                {showMore ? props.books.slice(0, 4).map((b) => <Link className="card pt-2 hover" style={{width: "12rem", height: '25rem', marginRight: 20, marginBottom: 20, background: '#222', textDecoration: 'none', color: '#0dcaf0'}} key={b.id} to={`/book/${b.id}`}><BookCard book={b} /></Link> ) :
                            props.books.map((b, i) => <Link className="card pt-2 hover" style={{width: "12rem", height: '25rem', marginRight: 20, marginBottom: 20, background: '#222', textDecoration: 'none', color: '#0dcaf0'}} key={b.id} to={`/book/${b.id}`}><BookCard key={i} book={b} /></Link>)}
            {(props.books.length > 4) ? <div onClick={toggleShowMore} style={{cursor: 'pointer'}}>{showMore ? '...Show More' : ' Show Less'}</div> : <></>}
            </div>
        </div>
    );
  }
  
  export default BookList;
  