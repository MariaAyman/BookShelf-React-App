import BookList from './BookList';
import {useState, useEffect} from 'react';

export default function FilterGenre(props){
    console.log("Browse Props: ", props);
    const [filteredBooks, setFilter] = useState(props.books);
    console.log("filtered books: ", filteredBooks);

    const filterRelease = (genre) => {
        console.log(genre, typeof genre);
        const filterB = props.books.filter(b => b.genre.includes(genre));
        console.log(filterB);
        setFilter(filterB);
    }

    useEffect(() => {
        filterRelease(props.genre);
    }, [])

    return(
        <BookList books={filteredBooks} />
    );
} 