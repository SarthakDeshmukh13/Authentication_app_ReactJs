import {Link} from "react-router-dom"

function Navbar(){

    const un =localStorage.getItem("un");

    return(
        <>
        <center>

            <div className="nav">
                {(un==null) && <Link to="/">Login</Link>}
                {(un==null) && <Link to="/signup">SignUp</Link>}
                {(un==null) && <Link to="/fp">Forgot Password</Link>}

                {(un!=null) && <Link to="/home">Home</Link>}
                {(un!=null) && <Link to="/about">About</Link>}
                {(un!=null) && <Link to="/cp">Change Password</Link>}

            </div>
        </center>
        
        </>
    )
}

export default Navbar;