
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import Axios from "axios";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [access, setAccess] = useState();

    const register = (e) => {
      
        e.preventDefault();

        Axios.post("http://localhost:8001/signup", {
          
            username: username,
            password: password,
            email: email,
            phoneno: phone,
            address: address,
        }).then((response) => {
            console.log(response);
            if(response.data.auth == true){
                setAccess(true);
            }
            else{
                setAccess(false);
            }
        });
        
    };
    if(access){
        return <Redirect to="/home" />
    }

    return (
        <div className='log-page'>
            <div className='mx-auto m-5 user-select-none log-page-title'>
                <TitleSVG />
            </div>
            <div className='log-box-main'>
                <div className='log-title'>
                    <Link
                        to='/'
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        <b>LogIn</b>
                    </Link>
                </div>
                <div
                    className='sign-title'
                    style={{ backgroundColor: "#fff", color: "#D92027" }}
                >
                    <b>SignUp</b>
                </div>
                <div>
                    <form onSubmit={register}>
                        <div className='m-5 input-box'>
                            <input
                                className='form-control m-4'
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                            ></input>
                        </div>
                        <div className='m-5 input-box'>
                            <input
                                className='form-control m-4'
                                type='text'
                                placeholder='Username'
                                name='name'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                required
                            ></input>
                        </div>

                        <div className='input-box'>
                            <input
                                className='form-control m-4'
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                            ></input>
                        </div>

                        <div className='input-box'>
                            <input
                                className='form-control m-4'
                                type='text'
                                placeholder='Address'
                                name='address'
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                required
                            ></input>
                        </div>
                        <div className='input-box'>
                            <input
                                className='form-control m-4'
                                style={{ width: 250 }}
                                type='tel'
                                placeholder='Mobile Number'
                                name='phone'
                                pattern='[5-9][0-9]{9}'
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                required
                            ></input>
                        </div>

                        <button className='btn login-btn' onClick={register}>
                            Create account
                        </button>
                    </form>

                    <Link to='/'>Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
