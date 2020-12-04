import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
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
            if (response.data.auth == true) {
                setAccess(true);
            } else {
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
            <div className='d-flex justify-content-center'>
                <div className='user-type-active'>Student</div>
                <div className='user-type'>Teacher</div>
            </div>
            <div className='mx-auto py-4 log-box-main'>
                {/* <div className='log-title'>
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
                </div> */}
                <form className='mx-auto form-group col-10' onSubmit={register}>
                    <div className='py-4'>
                        <input
                            className='form-control mb-4'
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        ></input>
                        <input
                            className='form-control my-4'
                            type='text'
                            placeholder='Username'
                            name='name'
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            required
                        ></input>
                        <input
                            className='form-control my-4'
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        ></input>
                        <input
                            className='form-control my-4'
                            type='text'
                            placeholder='Address'
                            name='address'
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            required
                        ></input>
                        <input
                            className='form-control mt-4 mx-auto'
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
                    <div className='my-2'>
                        <button
                            className='btn mx-auto login-btn d-block col-7'
                            onClick={register}
                        >
                            Create account
                        </button>
                    </div>
                </form>
            </div>
            <div className='text-center m-4 sign-up'>
                Already have an account?&nbsp;
                <Link to='/'>Log in</Link>
            </div>
            <div className='w-100 fig-container'>
                <figure className='login-fig'></figure>
            </div>
        </div>
    );
}

export default SignUp;
