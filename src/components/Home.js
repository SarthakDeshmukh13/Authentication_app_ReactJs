import Navbar from "./Navbar";
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import {getAuth,signOut} from "firebase/auth"
function Home(){

    const[user,setUser]=useState("")
    const nav = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let u = localStorage.getItem("un")
        if(u==null){
            nav("/login")
        }
        else{
            setUser(u);
        }
    },[])


    const lo = (e) => {
        e.preventDefault();
        const auth = getAuth();
        localStorage.clear();
        signOut(auth)
        .then(res =>nav("/login"))
        .catch(err =>console.log(err))
    }


    return(
        <>
        <center>
            <Navbar/>
            <h1>Home Page</h1>
            <h3>
                Welcome {user}
            </h3>

            <form onSubmit={lo}>
                <input type="submit" value="LogOut"></input>
            </form>
        </center>
        </>
    )
 }

export default Home;