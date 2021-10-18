import {useState} from 'react'
import Header from '../Components/Header'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {
    const { currentUser } = useAuth()
    const [checked, setChecked] = useState(true)
    const [unChecked, setUnChecked] = useState(false)
    
    return(
        <>
        <Header />
        <div className="d-flex flex-column align-items-center justify-content-center">
            {currentUser ? <img className="profilePic" src={currentUser.photoURL} alt=""/> : ""}
            {currentUser ? <h1>{currentUser.displayName}</h1> : ""}
        </div>
        <div style={{width: '100%'}}>
            <Link to="/update-profile" style={{textDecoration: 'none', width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <Button className="w-25 mt-2 form-button" type='submit'>Update Profile</Button>
            </Link>
        </div>
        <div className="container p-4 my-4 content-box">
            <h4>Bio</h4>
            <div style={{textAlign: "center"}}>
                <p><i>"Never let them tell you you're not magic"</i></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
            </div>
        </div>
        <div className="container p-4 my-4 content-box">
            <h4>Favourite Genres: </h4>
            <div className="row">
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckDefault" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckDefault" style={{color: "#fff", paddingLeft: 5}}>Action and Adventure</label>
                    </div>
                </div> 
                <div className="col">  
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={checked} onChange={() => setChecked(!checked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Fantasy</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">    
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Classics</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Historical Fiction</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">    
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Horror</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={checked} onChange={() => setChecked(!checked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Romance</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">    
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={checked} onChange={() => setChecked(!checked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Thriller</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={checked} onChange={() => setChecked(!checked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Young Adult</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">    
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={checked} onChange={() => setChecked(!checked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Sci-Fi</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Biographies and Autobiographies</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">    
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>Poetry</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="flexCheckChecked" checked={unChecked} onChange={() => setUnChecked(!unChecked)} style={{width: 25, height: 25}}/>
                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked" style={{color: "#fff", paddingLeft: 5}}>History</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;