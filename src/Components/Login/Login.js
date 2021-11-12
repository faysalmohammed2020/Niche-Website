import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/login.jpg'
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import useAuth from '../../hooks/useAuth';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const{loginUser,saveUser} = useAuth();
    const[loginInfo ,setLoginInfo] = useState({});

    const[user,setUser] =useState({})
     const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from  || '/Dashboard';
    console.log('came from',location.state?.from);
     const handleGoogleSignIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            const{displayName,email} = result.user;
            
            const loggeduser ={
                name: displayName,
                mail: email
            }

          setUser(loggeduser);
          saveUser(user.email , user.displayName ,'PUT')
          history.push(redirect_url)
        })
    }

            const handleOnChange = e =>{
            const field = e.target.name;
            const value = e.target.value;
            const newloginInfo = { ...loginInfo };
            newloginInfo[field] = value;
            setLoginInfo(newloginInfo);
    
        }
         const handleLogin = e =>{
        loginUser(loginInfo.email, loginInfo.password, location, history);
        e.preventDefault();
        }
        
    return (
        <div >
            <div className="login">
                
        <img style={{width:'50%'}}src={login} />
        <div className="login-form">
        <h1 style={{color:'white'}}>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter your email" name="email" onChange={handleOnChange}/><br/>
                <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/><br/>
                <input type="submit" value="Login" className="btn btn-primary"/>
            </form>

            
            
            <button onClick={handleGoogleSignIn}class="btn btn-primary buttongoogle">  Google Sign In</button><br/>
            <Link style={{textDecoration:'none',color:'white'}} to="/Register">
                Do you New User?Please Register
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Login;