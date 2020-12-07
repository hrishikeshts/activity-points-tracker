import React, { useState } from "react";
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
    const [message, setMessage] = useState("");

    const register = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:8001/signup", {
            username: username,
            password: password,
            email: email,
            phoneno: phone,
            address: address,
        }).then((response) => {
            if (response.data.auth) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", username);
                setAccess(true);
            } else {
                setAccess(false);
                setMessage(response.data);
            }
        });
    };
    if (access) {
        return (
            <Redirect
                to='/home'
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
                        <span
                            className='d-block dark-blue-text opa-50'
                            data-toggle='tooltip'
                            title='Create account for students only'
                        >
                            Teacher
                        </span>
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
                        <form
                            className='mx-auto form-group col-10'
                            onSubmit={register}
                        >
                            <div className='py-4'>
                                <input
                                    className='form-control px-3 mb-4'
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Username'
                                    name='name'
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Address'
                                    name='address'
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 mt-4 mx-auto'
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
                                    className='btn mx-auto start-btn d-block col-6'
                                    type="submit"
                                >
                                    Create account
                                </button>
                            </div>
                            <p
                                style={{
                                    color: "red",
                                    fontSize: 12,
                                    textAlign: "center",
                                }}
                            >
                                {message}
                            </p>
                        </form>
                    </div>
                    <div className='text-center m-4 onboarding-desc'>
                        Already have an account?&nbsp;
                        <Link to='/login' draggable='false'>
                            Log in
                        </Link>
                    </div>
                </div>
                <div className='col-12 col-md-6 order-md-1'>
                    <figure className='opa-50 login-data-rafiki'></figure>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
