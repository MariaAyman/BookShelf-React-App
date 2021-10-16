import React, { useState } from 'react'
import { Button, Alert, Tab, Tabs } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

function Navbar() {
  const [error, setError] = useState('')
  const { logout, currentUser } = useAuth()

  const history = useHistory();

  async function handleLogout(){
    setError('') 

    try{
        await logout()
        history.push('/login')
    } catch {
        setError('Failed to log out')
    }
  }

    return (
      <span className="headerIcons">
        {error && <Alert variant='danger'>{error}</Alert>}
        <nav className="navbar">
          <ul>
            <li className="icon"><Link to="/browse"><i className="fas fa-search"></i></Link></li>
            <li className="icon"><Link to="/books"><i className="fas fa-book"></i></Link></li>
            <li className="icon"><Link to="/"><img src={currentUser.photoURL} alt=""/></Link></li>
            <Button variant="link" onClick={handleLogout}>Log out</Button>
          </ul>
        </nav>
      </span>
    );
  }
  
  export default Navbar;
  