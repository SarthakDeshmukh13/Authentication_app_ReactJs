import Navbar from "./Navbar";
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";

function About(){
    
    const nav = useNavigate();

    useEffect(() => {
        let u = localStorage.getItem("un")
        if(u==null){
            nav("/login")
        }
        else{
        }
    },[])

    return(
        <>
        <Navbar/>
        <h1> About Page</h1>
        <h2>
        <p>Languages Familiar with : </p>
        <p>Python</p>    
        <p>javaScript</p>    
        <p>ReactJs</p>    
        <p>HTML</p>    
        <p>CSS</p>    
        </h2>        
        </>
    )
}

export default About;