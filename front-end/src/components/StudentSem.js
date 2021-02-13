import React from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import { MdPerson } from "react-icons/md";
import SemNo from "./SemNoOnAdmin";
import "./admin.css";

function StudentSem() {
    const user = localStorage.getItem("student");
    const sem = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];

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
                    <div className='sem-sidebar card-bg col-3 py-3 px-4'>
                        <div className='dark-blue h5'>Semesters</div>
                        <div className='my-3'>
                            {sem.map((semno) => {
                                return <SemNo semno={semno} />;
                            })}{" "}
                            {/* <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S1");
                                }}
                            >
                                S1
                            </Link>
                        </div>{" "}
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S2");
                                }}
                            >
                                S2
                            </Link>{" "}
                        </div>
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S3");
                                }}
                            >
                                S3
                            </Link>
                        </div>{" "}
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S4");
                                }}
                            >
                                S4
                            </Link>
                        </div>{" "}
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S5");
                                }}
                            >
                                S5
                            </Link>
                        </div>
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S6");
                                }}
                            >
                                S6
                            </Link>
                        </div>
                        <div className='my-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S7");
                                }}
                            >
                                S7
                            </Link>
                        </div>
                        <div className='mt-3'>
                            <Link
                                to='/studentinfo'
                                onClick={() => {
                                    localStorage.setItem("sem", "S8");
                                }}
                            >
                                S8
                            </Link> */}
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='d-flex align-items-center mt-3 mb-0 mr-3'>
                            <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                                <MdPerson size={22} />
                            </div>
                            <div className='dark-blue h4'>{user}</div>
                        </div>
                        <div className='folder-bg text-center'>
                            Select a semester to view
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentSem;
