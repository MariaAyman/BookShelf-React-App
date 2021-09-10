import { Link } from "react-router-dom";

function Navbar() {
    return (
      <span className="headerIcons">
        <nav className="navbar">
          <ul>
            <li className="icon"><Link to="/browse"><i className="fas fa-search"></i></Link></li>
            <li className="icon"><Link to="/books"><i className="fas fa-book"></i></Link></li>
            <li className="icon"><Link to="/"><img src="profile.png" alt=""/></Link></li>
          </ul>
        </nav>
      </span>
    );
  }
  
  export default Navbar;
  