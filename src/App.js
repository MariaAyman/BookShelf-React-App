import Books from './Pages/Books';
import Browse from './Pages/Browse';
import Profile from './Pages/Profile';
import BookDetails from "./Pages/BookDetails";
import NotFound from './Pages/NotFound';

import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';

//shelfNo: 0-> none 1-> currently 2-> want to read 3-> read

const mapStateToProps = state => {
  return {
      books: state.books
  }
}

function App(props) {
  
  const books = props.books;
  console.log("App books props: ", books);

  return (

    <Switch>
      <Route exact path="/" component={Profile} />
      <Route path="/books" render={(props) => <Books {...props} books={books} />} />
      <Route path="/browse" render={(props) => <Browse {...props} books={books} />} />
      <Route path="/book/:id" render={(props) => <BookDetails {...props} books={books} />} />
      <Route component={NotFound} />
    </Switch>
  );}
//}

export default connect(mapStateToProps)(App);
