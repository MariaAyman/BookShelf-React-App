import Header from '../Components/Header'
import { useAuth } from '../contexts/AuthContext'

const Profile = () => {
    const { currentUser } = useAuth()
    
    return(
        <>
        <Header />
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="profilePic" src={currentUser.photoURL} alt=""/>
            <h1>{currentUser.displayName}</h1>
        </div>
        <div className="container p-4 my-4 content-box">
            <h4>Bio</h4>
            <div style={{textAlign: "center"}}>
                <p><i>"Never let them tell you you're not magic"</i></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid</p>
            </div>
        </div>
        </>
    );
}

export default Profile;