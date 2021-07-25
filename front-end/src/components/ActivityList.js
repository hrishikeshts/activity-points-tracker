import react, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import { FaPlus } from "react-icons/fa";
import ActivityCard from "./ActivityCardOnSem";
import ActivityModal from "./ActivityModal";
import Axios from "axios";

export default function ActivityList() {
    
    const [activity, setActivity] = useState("");
    const [prize, setPrize] = useState("");
    const [level, setLevel] = useState("");
    const [access, setAccess] = useState();
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState([]);
    const [tot, setTot] = useState(0);

    // const u = props.location.state.username;
    const user = localStorage.getItem("user");
    // const sem = props.location.state.sem;
    const semR = localStorage.getItem("sem");
    const token = localStorage.getItem("token");
    
    var distot = 0;


    useEffect(() => {
        var total = 0;
        Axios.get(`/${user}/${semR}/activity`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
        })
    }, []);


    for (var i=0; i<details.length;i++){
                distot = distot +details[i].point;
            }

    if (!token || !user) {
        return <Redirect to='/login' />;
    }
    return (
        <>
            <div className='my-5 container user-select-none overflow-hidden'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='log-page-title'>
                        <TitleSVG />
                    </div>
                    <div>
                        <Link
                            to='/home'
                            className='px-3 py-1 no-underline grey'
                        >
                            Home
                        </Link>
                        <Link
                            to='/profile'
                            className='px-5 py-1 no-underline grey'
                        >
                            Profile
                        </Link>
                        <Link to='/logout' className='btn start-btn px-3'>
                            Logout
                        </Link>
                    </div>
                </div>
                <div className='my-5'>
                    <div className='d-flex align-items-center '>
                        <h2 className='dark-blue mr-5 mb-0'>{semR}</h2>
                        {/* <Link
                            to='/activity'
                            className='btn start-btn orange-btn'
                        >
                            <div className='d-flex align-item-center'>
                                <div className='ml-2 mr-1'>
                                    <FaPlus />
                                </div>
                                <div className='ml-1 mr-2'>
                                    <span class='align-baseline'>Add New</span>
                                </div>
                            </div>
                        </Link> */}
                        <button
                            type='button'
                            className='btn start-btn orange-btn'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'
                        >
                            <div className='d-flex align-item-center'>
                                <div className='ml-2 mr-1'>
                                    <FaPlus />
                                </div>
                                <div className='ml-1 mr-2'>
                                    <span class='align-baseline'>Add New</span>
                                    
                                </div>
                            </div>
                        </button>

                        <div
                            className='modal fade'
                            id='exampleModalCenter'
                            tabindex='-1'
                            role='dialog'
                            aria-labelledby='exampleModalCenterTitle'
                            aria-hidden='true'
                        >
                            <div
                                className='modal-dialog modal-dialog-centered'
                                role='document'
                            >
                                <div className='modal-content'>
                                    <ActivityModal />
                                    {/* <div className='modal-header'>
                                <h5
                                    className='modal-title'
                                    id='exampleModalLongTitle'
                                >
                                    Modal title
                                </h5>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                    aria-label='Close'
                                >
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>...</div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    data-dismiss='modal'
                                >
                                    Close
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                >
                                    Save changes
                                </button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h4 className='purple'>Activities</h4>
                        <h6 className='dark-blue'>Points Gained : {distot}</h6>
                        <ActivityCard data={details} total={distot}/>
                    </div>
                </div>
            </div>
        </>
    );
}
