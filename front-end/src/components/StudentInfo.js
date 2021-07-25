import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import Axios from "axios";
import { MdAssignment } from "react-icons/md";
import "./profile.css";
import "./admin.css";

function StudentInfo() {
    const [details, setDetails] = useState([]);
    const semR = localStorage.getItem("sem");
    const user = localStorage.getItem("student");

    const [isS1, setIsS1] = useState(false);
    const [isS2, setIsS2] = useState(false);
    const [isS3, setIsS3] = useState(false);
    const [isS4, setIsS4] = useState(false);
    const [isS5, setIsS5] = useState(false);
    const [isS6, setIsS6] = useState(false);
    const [isS7, setIsS7] = useState(false);
    const [isS8, setIsS8] = useState(false);

    useEffect(() => {
        Axios.get(`/${user}/${semR}/activity`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            // console.log(response.data);
        });
    }, []);

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
                <div className='row'>
                    <div className='py-3 px-4'>
                        <Link to='/studentsem' className='no-underline'>
                            View Semesters
                        </Link>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex align-items-center my-3 mr-3'>
                            <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                                <MdAssignment size={22} />
                            </div>
                            <div className='dark-blue h4'>{user}</div>
                        </div>
                        <h2 className='dark-blue mx-4 mb-0'>{semR}</h2>
                        <div style={{ textAlign: "center" }}>
                            {details.map((item) => (
                                <div className="m-4">
                                    <div
                                        key={item.id}
                                        className='card-bg py-3 px-5 profile-size'
                                    >
                                        <div className='d-flex align-items-center my-3 mr-3'>
                                            <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                                                <MdAssignment size={22} />
                                            </div>
                                            <div className='dark-blue h4'>
                                                {item.title}
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className='profile-center my-1'>
                                            <div className='my-3'>
                                                <span className='purple font-500'>
                                                    Prize Won :
                                                </span>
                                                <span className='profile-form mb-4'>
                                                    {item.prize}
                                                </span>
                                            </div>

                                            <div className='my-3'>
                                                <span className='purple font-500'>
                                                    Achievement Level :
                                                </span>
                                                <span className='profile-form mb-4'>
                                                    {item.level}
                                                </span>
                                            </div>

                                            <div className='my-3'>
                                                <span className='purple font-500'>
                                                    Category :
                                                </span>
                                                <span className='profile-form mb-4'>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className='my-3'>
                                                <span className='purple font-500'>
                                                    Status:
                                                </span>
                                                <span className='profile-form mb-4'>
                                                    {item.verify ? <p>Approved</p> : <p>Pending</p> }
                                                </span>
                                            </div>

                                            <button
                                                className='btn start-btn'
                                                onClick={() => {
                                                    window.open(
                                                        `/${item.image}`
                                                    );
                                                }}
                                            >
                                                View Certificate
                                            </button>
                                            {item.verify}
                                            <button
                                                className={item.verify ?'m-2 btn start-btn d-none':'m-2 btn start-btn green-btn'  }
                                                onClick={() => {
                                                    Axios.post("/approval", {
                                                            username: user,
                                                            sem:semR,
                                                            id: item.id,
                                                            
                                                        },
                                                        {
                                                            headers: {
                                                                "x-access-token": localStorage.getItem("token"),
                                                            },
                                                        }        
                                                        )
                                                }}
                                            >
                                                Approve
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                // <div key={item.id}>
                                //     <p>{item.title}</p>
                                //     <p>{item.prize}</p>
                                //     <p>{item.level}</p>
                                //     <br />
                                //     <br />
                                //     <button
                                //         onClick={() => {
                                //             window.open(
                                //                 `/${item.image}`
                                //             );
                                //         }}
                                //     >
                                //         View Certificate
                                //     </button>
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentInfo;
