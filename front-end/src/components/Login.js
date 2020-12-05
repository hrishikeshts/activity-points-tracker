import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState(false);
    const [message, setMessage] = useState("");


    // Axios.defaults.withCredentials = true;
    

    const login = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:8001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.auth) {

                localStorage.setItem("token", response.data.token);
                setAccess(true);

            } else {
                setAccess(false);
                setMessage(response.data.message);
            }
        });
    };

    if (access) {
        return <Redirect to={{
            pathname: "/home",
            state: { username: username } // your data array of objects
          }} />;
    }

    return (
        <div className='log-page user-select-none'>
            <div className='mx-auto m-5 log-page-title'>
                <TitleSVG />
            </div>
            <div className='d-flex justify-content-center'>
                <div className='dark-blue-text-active'>Student</div>
                <div className='dark-blue-text'>Teacher</div>
            </div>
            <div className='mx-auto py-4 log-box-main'>
                {/* <div
                    className='log-title'
                    style={{ backgroundColor: "#fff", color: "#D92027" }}
                >
                    <b>LogIn</b>
                </div> */}
                {/* <div className='sign-title'>
                    <Link
                        to='/signup'
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        <b>Sign Up</b>
                    </Link>
                </div> */}
                <form className='mx-auto form-group col-10' onSubmit={login}>
                    <div className='py-4'>
                        <input
                            className='form-control mb-4'
                            type='text'
                            placeholder='Username'
                            name='username'
                            required
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        ></input>
                        <input
                            className='form-control mt-4'
                            type='password'
                            placeholder='Password'
                            name='password'
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div className='my-2'>
                        <button
                            className='btn mx-auto start-btn d-block col-7'
                            type='submit'
                        >
                            Sign in
                        </button>
                        
                    </div>
                    <p style={{color:"red",textAlign:"center",fontSize:12}}>{message}</p>

                    
                </form>
            </div>
            <div className='text-center m-4 onboarding-desc'>
                Don't have an account?&nbsp;
                <Link to='/signup'>Sign up</Link>
            </div>
            <div className='w-100 fig-container'>
                <figure className='opa-50 data-rafiki-1'></figure>
            </div>
        </div>
    );
}

export default Login;
