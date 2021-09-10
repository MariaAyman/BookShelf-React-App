import axios from 'axios';
import Self from '../Pages/Shelf'
//import BookList from './BookList';
import {useState, useEffect} from 'react';

const API_KEY = 'AIzaSyBEziGb1_VgUb40UJJ-JwMO8FrgQohaV0A';

export default function Row ({title, fetchURL}){
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortcontroller = new AbortController();
        const singel = abortcontroller.signal;
        const getBooks = () => {
            axios.get(`${fetchURL}&key=${API_KEY}`)
                .then(
                    response => {
                        //console.log('Browse Response: ', response);
                        setIsLoaded(true);
                        setBooks(response.data.items);
                    },
                    error => {
                        //console.log('Error: ', error);
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
        getBooks();
        return function cleanup(){
            console.log("I am a clean up function");
            abortcontroller.abort();
        }; 
    }, [])

    return(
        <div className='container my-4'>
            <h6>{title}</h6>
            <Self books={books} />
            {/* <BookList books={books} /> */}
        </div>
    )
}