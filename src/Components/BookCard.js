
function BookCard(props) {
    return (
        <div>
            <img src={props.book.cover} className="card-img-top" alt="..." style={{height: 250}}/>
            <div className="card-body">
                <h6 className="card-title">{props.book.title}</h6>
            </div>
        </div>
    );
    
  }
  
  export default BookCard;
  