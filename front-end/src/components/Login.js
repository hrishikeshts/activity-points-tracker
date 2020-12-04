import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState(false);

    const login = (e) => {

        e.preventDefault();

        Axios.post('http://localhost:8001/login', {
            username: username,
            password: password,
        }).then((response) => {
            if(response.data.auth == true){
                setAccess(true);
            }
        });
    };
    if(access){
        return <Redirect to="/home" />
    }

    return (
        <div className="log-page">
                <h3 style={{color:"#D92027",marginBottom:60}}><b>Brand Name</b></h3>
                <div className="log-box-main">
                    <div className="log-title" style={{backgroundColor:"#fff",color:"#D92027"}}>
                        <b>LogIn</b>
                    </div>
                    <div className="sign-title">
                        <Link to="/signup" style={{color:"#fff",textDecoration:"none"}}><b>Sign Up</b></Link>
                    </div>
                    <div>
                        <form className="form-style" onSubmit={login}>
                            <div className="input-box"> 
                                    <input
                                        className="input-ins"
                                        type="text"
                                        placeholder="User Name"
                                        name="username"
                                       
                                        required
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}>
                                        
                                    </input>
                            </div>
                                
                            <div className="input-box">
                            
                                    <input
                                        className="input-ins"
                                        type="password"
                                        placeholder="Password"
                                        name="password" 
                                    
                                        required
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}>
        
                                    </input>
                            </div>  
                            
                                    
                                
                            <button className="login-btn" style={{marginTop:30}} type="submit">Let's Go!</button>
                                
                                
                            
                        </form>
                        <Link to="/signup">Sign up</Link>
                    </div>
                    
                    </div>
                </div>
    );
}

export default Login;