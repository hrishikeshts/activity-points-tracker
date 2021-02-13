import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import TitleSVG from "../TitleSVG";
import StudentCard from "./StudentCardOnAdmin";

function AdminDash() {
    const [details, setDetails] = useState([]);
    const [activities, setActivities] = useState([]);
    const sem = "S1";

    // useEffect(() => {
    //     Axios.get(`http://localhost:8001/admin/studentinfo`, {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     }).then((response) => {
    //         setDetails(response.data);
    //         // console.log(response.data[0]);
    //         return Axios.get(`http://localhost:8001/${response.data[3].username}/${sem}/activity`, {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         })
    //     }).then((response) => {
    //         setActivities(response.data);
    //         console.log(response.data);
    //     });;
    // }, []);
    useEffect(() => {
        Axios.get(`http://localhost:8001/admin/studentinfo`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            console.log(response.data);
        });
    }, []);
    console.log(details);
    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/admindash' className='px-5 py-1 no-underline'>
                        Home
                    </Link>
                    <Link to='/logout' className='btn start-btn px-3'>
                        Logout
                    </Link>
                </div>
            </div>
            <div className='my-5'>
                <div className='dark-blue h5'>Students</div>
                <div>
                    {details.map((item) => (
                        <div key={item.id}>
                            <Link
                                to='/studentsem'
                                className='no-underline'
                                onClick={() => {
                                    localStorage.setItem(
                                        "student",
                                        item.username
                                    );
                                    // localStorage.setItem("sem", "S1");
                                }}
                            >
                                <StudentCard item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminDash;
