import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import DataRafiki from "../graphics/Data-rafiki.svg";
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState();

    // Axios.defaults.withCredentials = true;

    const login = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:8001/login", {
            username: username,
            password: password,
        }).then((response) => {
          
            if (response.data.auth == true) {
                setAccess(true);
            }
            else{
                setAccess(false);
            }
        });
    };
  
    if (access) {
        return <Redirect to='/home' />;
    }

    return (
        <div className='log-page'>
            <div className='mx-auto m-5 user-select-none log-page-title'>
                <TitleSVG />
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
                            className='btn mx-auto login-btn d-block col-7'
                            type='submit'
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <div className='text-center m-4 sign-up'>
                Don't have an account?&nbsp;
                <Link to='/signup'>Sign up</Link>
            </div>
            <div className='w-100 fig-container'>
                <figure className='login-fig'></figure>
            </div>
        </div>
    );
}

export default Login;
