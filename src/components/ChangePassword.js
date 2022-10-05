import Navbar from "./Navbar";
import {useEffect,useState} from "react"
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom"

function ChangePassword(){
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

    const [pw1,setPw1] = useState("")
    const [pw2,setPw2] = useState("")
    const [msg,setMsg] = useState("")
    

    const hPw1 = (event) =>{setPw1(event.target.value)}
    const hPw2 = (event) =>{setPw2(event.target.value)}

    const change=(e)=>{
        e.preventDefault();
        if(pw1===pw2){
            const auth=getAuth();
            onAuthStateChanged(auth,(user)=>{
                if(user)
                {
                    updatePassword(user,pw1)
                    .then(res=>{
                        localStorage.clear();
                        nav("/login");
                    })
                    .catch(err=>setMsg("issue" + err))
                }
            })
        }
        else{
            setMsg("passwords did not match")
        }
    }
    return(
        <>
        <center>
        <Navbar/>
        <h1>SignUp Page</h1>
        <form onSubmit={change}>
            <input type={"password"} placeholder="Enter new password" onChange={hPw1} value={pw1}/>
            <br/><br/>
            <input type={"password"} placeholder="Confirm Password" onChange={hPw2} value={pw2} />
            <br/><br/>
            <input type={"submit"} value="Change Password"/>
        </form>
        <h2>{ msg }</h2>
        </center>
        </>
    )
}

export default ChangePassword;