import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import Axios from "axios";

export default function ActivityCard({ data , total }) {

    const [approval, setApproval] = useState(false);
    
    return (
        <div>
            {data.map((item) => (
                <div className='card-bg activity-card my-3 px-1 d-flex align-items-center'>
                <div className='d-flex align-items-center w-100'>
                    <div className='mr-auto'>
                        <div className='d-flex align-items-center'>
                            <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                                <MdAssignment size={22} />
                            </div>
                            <div>
                                <div className='dark-blue font-400'>
                                    {item.title}
                                </div>
                                <div className='font-small'>
                                    {item.prize} | {item.level} | {item.point} points
                                </div>
                            </div>
                        </div>
                    </div>
                    {item.verify ? (
                        <div className='mx-3 py-2 px-4 green-flag'>Approved</div>
                    ) : (
                        <div className='mx-3 py-2 px-4 orange-flag'>Pending</div>
                    )}
                    <div className='btn-group mx-2'>
                        <button
                            type='button'
                            className='btn px-0 dropdown-btn'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                        >
                            <div className='more-vert'>
                                <MdMoreVert size={22} />
                            </div>
                        </button>
                        <div className='dropdown-menu dropdown-menu-right three-dots'>
                            <button
                                className='dropdown-item dark-blue'
                                type='button'
                            >
                                Edit
                            </button>
                            <button
                                className='dropdown-item dark-blue'
                                type='button'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
