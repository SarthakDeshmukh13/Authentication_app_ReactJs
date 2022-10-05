import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import About from './components/About';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { initializeApp } from "firebase/app";
import ChangePassword from './components/ChangePassword';

const firebaseConfig = {
  apiKey: "AIzaSyAEYEp4ZY73vjEmzqqMYERVd5SYOoB6k-s",
  authDomain: "reactauthenticationapp-115da.firebaseapp.com",
  projectId: "reactauthenticationapp-115da",
  storageBucket: "reactauthenticationapp-115da.appspot.com",
  messagingSenderId: "172700565343",
  appId: "1:172700565343:web:0cd9904f9c2a8935c6c0ea"
};

const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <center>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/fp" element={<ForgotPassword/>}/>
            <Route path="/cp" element={<ChangePassword/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
      </BrowserRouter>
      </center>
   </div>
  );
}

export default App;
