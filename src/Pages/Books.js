import Header from '../Components/Header.js';
import BookList from '../Components/BookList.js';

function Books(props) {
  console.log(props);
  
  return (
    <>
      <Header/>
      <div className="container" >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img className="profilePic" src="profile.png" alt=""/>
          <h1>Maria Ayman</h1>
        </div>
        <div className="container p-4 my-4" style={{border: "1px solid #fff", background: '#111'}}>
          <h4>Currently Reading</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 1)}/>
        </div>
        <div className="container p-4 my-4" style={{border: "1px solid #fff", background: '#111'}}>
          <h4>Want to Read</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 2)}/>
        </div>
        <div className="container p-4 my-4" style={{border: "1px solid #fff", background: '#111'}}>
          <h4>Read</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 3)}/>
        </div>
      </div>
    </>
  );
  }
  
  export default Books;
  