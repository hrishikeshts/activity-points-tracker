import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';


function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [access, setAccess] = useState();

    const register = (e) => {
            e.preventDefault();

            Axios.post('http://localhost:8001/signup', {
            username: username,
            password: password,
            email: email,
            phoneno: phone,
            address: address
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
        <div className="log-page">
            <h3 style={{ color: "#D92027", marginBottom: 60 }}><b>Brand Name</b></h3>
            <div className="log-box-main">
                <div className="log-title">
                    <Link to="/"
                        style={{ color: "#fff", textDecoration: "none" }}>
                        <b>LogIn</b>
                    </Link>
                </div>
                <div className="sign-title"
                    style={{ backgroundColor: "#fff", color: "#D92027" }}>
                    <b>SignUp</b>
                </div>
                <div>
                    <form className="form-style" onSubmit={register}>

                        <div className="input-box">
                            <input
                                className="input-ins"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                            >

                            </input>
                        </div>
                        <div className="input-box">

                            <input
                                className="input-ins"
                                type="text"
                                placeholder="Username"
                                name="name"
                                required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                
                            >

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
                                }}
                                
                            >

                            </input>
                        </div>

                        <div className="input-box">

                            <input
                                className="input-ins"
                                type="text"
                                placeholder="Address"
                                name="address"
                                required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                
                            >

                            </input>
                        </div>
                        <div className="input-box">

                            <input
                                className="input-ins"
                                style={{ width: 250 }}
                                type="tel"
                                placeholder="Mobile Number"
                                name="phone"
                                pattern="[5-9][0-9]{9}"
                                required
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                
                            >

                            </input>
                        </div>


                        <button
                            className="login-btn"
                            onClick={register}
                        >Create account
                     </button>



                    </form>

                    <Link to='/'>Log In</Link>
                </div>

            </div>

        </div>
    );
}


export default SignUp;