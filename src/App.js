import Books from './Pages/Books';
import Browse from './Pages/Browse';
import Profile from './Pages/Profile';
import BookDetails from "./Pages/BookDetails";
import NotFound from './Pages/NotFound';
import UpdateProfile from './Pages/UpdateProfile'

import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';

import { AuthProvider } from './contexts/AuthContext'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword'
import PrivateRoute from './Components/PrivateRoute'

//const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy|Fiction|"Young+Adult"&langRestrict="en"&printType=books&maxResults=40';
//const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
//const API_KEY =  process.env.REACT_APP_GOOGLE_BOOKS_API_KEY; 

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
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Profile} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/books" render={(props) => <Books {...props} books={books} />} />
        <Route path="/browse" render={(props) => <Browse {...props} books={books} />} />
        <Route path="/book/:id" render={(props) => <BookDetails {...props} books={books} />} />
        <Route component={NotFound} />
      </Switch>
    </AuthProvider>
  );}
//}

export default connect(mapStateToProps)(App);
