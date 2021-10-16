import Header from '../Components/Header.js';
import BookList from '../Components/BookList.js';
import { useAuth } from '../contexts/AuthContext'

function Books(props) {
  console.log(props);
  const { currentUser } = useAuth()
  
  return (
    <>
      <Header/>
      <div className="container" >
        <div className="d-flex flex-column align-items-center justify-content-center">
          {currentUser ? <img className="profilePic" src={currentUser.photoURL} alt=""/> : ""}
          {currentUser ? <h1>{currentUser.displayName}</h1> : ""}
        </div>
        <div className="container p-4 my-4 content-box">
          <h4>Currently Reading</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 1)}/>
        </div>
        <div className="container p-4 my-4 content-box" >
          <h4>Want to Read</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 2)}/>
        </div>
        <div className="container p-4 my-4 content-box" >
          <h4>Read</h4>
          <BookList books={props.books.filter(b => b.shelfNo === 3)}/>
        </div>
      </div>
    </>
  );
  }
  
  export default Books;
  