import BookList from "../Components/BookList";
import Header from "../Components/Header";
import Search from '../Components/Search';

function Browse(props){
    
    return(
        <>
        <Header />
        <div className="container" >
            <div className="container my-4 p-4" style={{border: "1px solid #fff", background: "#111"}}>
                <h4>Explore Books</h4>
                <div>
                    <Search books={props.books}/>
                </div>
            </div>
            <div className="container my-4 p-4" style={{border: "1px solid #fff", background: '#111'}}>
                <h4>Explore by Genre:</h4>
                <div className='container my-4'>
                    <h6>Fantasy</h6>
                    <BookList books={props.books.filter((b) => b.genre.includes('Fantasy'))} />
                </div>
                
                <div className='container my-4'>
                    <h6>Young adult</h6>
                    <BookList books={props.books.filter((b) => b.genre.includes('Young adult'))} />
                </div>
                
                <div className='container my-4'>
                    <h6>Thriller</h6>
                    <BookList books={props.books.filter((b) => b.genre.includes('Thriller'))} />
                </div>
                
                <div className='container my-4'>
                    <h6>Romance</h6>
                    <BookList books={props.books.filter((b) => b.genre.includes('Romance'))} />
                </div>
                
                <div className='container my-4'>
                    <h6>Fiction</h6>
                    <BookList books={props.books.filter((b) => b.genre.includes('Fiction'))} />
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Browse;