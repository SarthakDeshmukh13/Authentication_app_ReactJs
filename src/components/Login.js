import Navbar from "./Navbar";
import {useState , useEffect} from "react"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"

function Login(){ 

    const nav = useNavigate();
    useEffect(()=>{
        let u = localStorage.getItem("un")
        if(u==null){
            nav("/login")
        }
        else{
            nav('/')
        }
    },[])


    const[email,setEmail]=useState("");
    const[pw,setPw]=useState("");
    const[msg,setMsg]=useState("");

    const hEmail=(e)=>{setEmail(e.target.value)}
    const hPw=(e)=>{setPw(e.target.value)}
    // const hMsg=(e)=>{setMsg(e.target.value)}


    const check=(e)=>{
            e.preventDefault()
            const auth=getAuth();
            signInWithEmailAndPassword(auth,email,pw)
            .then(res =>{
                localStorage.setItem("un",email);
                nav("/home");
            })
            .catch(err=> setMsg("issue" + err + "invalid login"))
    }


    return(
        <>
        <center>
            <Navbar/>
            <h1>Login Page</h1>
            <form onSubmit={check}>
                <input type="email" placeholder="Enter registered email" value={email} onChange={hEmail}/>
                <br/><br/>
                <input type="password" placeholder="enter Password" value={pw} onChange={hPw}/>
                <br/><br/>
                <input type="submit" value="login"/>
            </form>

                <h2>{msg}</h2>
        </center>
        
        </>
    )
}

export default Login;