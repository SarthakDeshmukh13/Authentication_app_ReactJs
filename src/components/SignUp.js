import React from 'react'
import Navbar from './Navbar'
import {useState,useRef} from "react";
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


function SignUp() {
    const nav = useNavigate();
   

    const [email,setEmail] = useState("")
    const [pw1,setPw1] = useState("")
    const [pw2,setPw2] = useState("")
    const [msg,setMsg] = useState("")
    const rPw1 = useRef("");

    const hEmail = (event) =>{setEmail(event.target.value)}
    const hPw1 = (event) =>{setPw1(event.target.value)}
    const hPw2 = (event) =>{setPw2(event.target.value)}
    
    const save = (event) =>{
        event.preventDefault();
        if (pw1 === pw2)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,email,pw1)
            .then(res=>{
                nav("/login");
            })
            .catch(err=>setMsg("Issues is: " + err + "User Is Already registered"))
        }
        else
        {
            setMsg("Passwords dont match");
            setPw1("");
            setPw2("");
            rPw1.current.focus();
        }
    }

  return (
    <div>
        <center>
        <Navbar/>
        <h1>SignUp Page</h1>
        <form onSubmit={save}>
            <input type={"text"} placeholder="Enter Your Email here" onChange={hEmail} value={email}/>
            <br/><br/>
            <input type={"password"} placeholder="Create Password" onChange={hPw1} value={pw1} ref={rPw1}/>
            <br/><br/>
            <input type={"password"} placeholder="Re-Enter Password" onChange={hPw2} value={pw2}/>
            <br/><br/>
            <input type={"submit"} value="Register"/>
        </form>
        <h2>{ msg }</h2>
        </center>
    </div>
  )
}

export default SignUp;