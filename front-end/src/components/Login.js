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

                localStorage.setItem("user",username);
                setAccess(true);
            } else {
                setAccess(false);
                setMessage(response.data.message);
            }
        });
    };

    if (access) {
        return (
            <Redirect
                to={{
                    pathname: "/home",
                    state: { username: username }, // your data array of objects
                }}
            />
        );
    }

    return (
        <div className='log-page user-select-none overflow-hidden min-vh-100 log-bg'>
            <div className='mx-auto m-5 log-page-title'>
                <TitleSVG />
            </div>
            <div className='row px-md-5'>
                <div className='col-12 col-md-6 order-md-2 px-xl-5'>
                    <div className='d-flex justify-content-center mx-auto w-75'>
                        <div className='dark-blue-text-active'>Student</div>
                        <div className='dark-blue-text'>
                            <Link to='/teacher-login' draggable='false'>
                                Teacher
                            </Link>
                        </div>
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
                        <form
                            className='mx-auto form-group col-10'
                            onSubmit={login}
                        >
                            <div className='py-4'>
                                <input
                                    className='form-control px-3 mb-4'
                                    type='text'
                                    placeholder='Username'
                                    name='username'
                                    required
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                ></input>
                                <input
                                    className='form-control px-3 mt-4'
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
                                    className='btn mx-auto start-btn d-block col-6'
                                    type='submit'
                                >
                                    Sign in
                                </button>
                                <p
                                    style={{
                                        color: "red",
                                        textAlign: "center",
                                        fontSize: 12,
                                    }}
                                >
                                    {message}
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className='text-center m-4 onboarding-desc'>
                        Don't have an account?&nbsp;
                        <Link to='/signup' draggable='false'>
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className='col-12 col-md-6 order-md-1'>
                    <figure className='opa-50 login-data-rafiki mt-auto'></figure>
                </div>
            </div>
        </div>
    );
}

export default Login;
