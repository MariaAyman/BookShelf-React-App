import Navbar from './Navbar';

function Header() {
    return (
      <div className="header container">
        <h1 style={{marginLeft: 10, fontSize: 50}} className="logo">IRead</h1>
        <Navbar/>
      </div>
    );
  }
  
  export default Header;
  