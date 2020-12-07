import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import Axios from "axios";

function Activity(props) {
    const [activity, setActivity] = useState("");
    const [prize, setPrize] = useState("");
    const [level, setLevel] = useState("");
    const [access, setAccess] = useState();
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState([]);

    // const u = props.location.state.username;
    const user = localStorage.getItem("user");
    // const sem = props.location.state.sem;
    const semR = localStorage.getItem("sem");
    const token = localStorage.getItem("token")

    useEffect(() => {
        Axios.get(`http://localhost:8001/${user}/${semR}/activity`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            // console.log(response.data);
        });
    }, []);

    const uploadDetails = (e) => {
        const token = localStorage.getItem("token");

        Axios.post(
            `http://localhost:8001/activity`,
            {
                username: user,
                sem: semR,
                activity: activity,
                prize: prize,
                level: level,
            },
            {
                headers: {
                    // 'Content-Type' :"application/json",
                    "x-access-token": token,
                },
            }
        ).then((response) => {
            console.log(response);

            // if (response.data.auth) {

            //     localStorage.setItem("token", response.data.token);
            //     setAccess(true);

            // } else {

            //     setAccess(false);
            //     setMessage(response.data);

            // }
        });
    };
    if (!token) {
        return <Redirect to="/login"/>;
    }

    return (
        <div className='log-page user-select-none overflow-hidden min-vh-100 log-bg'>
            <div className='mx-auto m-5 log-page-title'>
                <TitleSVG />
            </div>
            <div className='row px-md-5'>
                <div className='col-12 col-md-6 order-md-2 px-xl-5'>
                    <div className='text-center mb-4 onboarding-desc'>
                        Enter your activity details below
                    </div>
                    <div className='d-flex justify-content-center mx-auto w-75'>
                        <div className='dark-blue-text-active'>Activity</div>
                    </div>
                    <div className='mx-auto py-4 log-box-main'>
                        <form
                            className='mx-auto form-group col-10'
                            onSubmit={uploadDetails}
                        >
                            <div className='py-4'>
                                <input
                                    className='form-control px-3 mb-4'
                                    type='text'
                                    placeholder='Activity'
                                    name='activity'
                                    onChange={(e) => {
                                        setActivity(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Prize'
                                    name='prize'
                                    onChange={(e) => {
                                        setPrize(e.target.value);
                                    }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Level'
                                    name='level'
                                    onChange={(e) => {
                                        setLevel(e.target.value);
                                    }}
                                    required
                                ></input>
                            </div>
                            <div className='my-2'>
                                <button
                                    className='btn mx-auto start-btn d-block col-6'
                                    type='submit'
                                >
                                    Upload details
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
                        <div style={{ textAlign: "center" }}>
                            {details.map((item) => (
                                <div key={item.id}>
                                    <p>{item.activity}</p>
                                    {/* <p>{item.sem}</p>
                    <p>{item.prize}</p>
                    <p>{item.level}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 order-md-1'>
                    <figure className='opa-50 login-data-rafiki'></figure>
                </div>
            </div>
        </div>
    );
}

export default Activity;
