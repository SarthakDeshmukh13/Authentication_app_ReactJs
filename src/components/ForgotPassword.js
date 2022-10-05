import Navbar from "./Navbar";
import {useState} from "react"
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom"
function ForgotPassword(){

    const nav =useNavigate();
    const[email,setEmail]=useState("");
    const[msg,setMsg]=useState("");

    const hEmail=(e)=>{setEmail(e.target.value)}

    const reset=(e)=>{
        e.preventDefault();
        const auth=getAuth();
        sendPasswordResetEmail(auth,email)
        .then(res=>{
            nav("/login");
        })
        .catch(err=>setMsg("issue" + err))
    }
    return(
        <>
        <center>
            <Navbar/>
            <h1>Forgot Password</h1>
            <form onSubmit={reset}>
                <input type="email" placeholder="enter reg email" onChange={hEmail} value={email}/>
                <br/><br/>
                <input type="submit" value="Reset"/>
            </form>
            <h2>{msg}</h2>
        </center>
        
        </>
    )
}

export default ForgotPassword;