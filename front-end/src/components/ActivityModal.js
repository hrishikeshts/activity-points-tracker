import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import Select from "react-select";

const catego = [
    { value: "Sports and games", label: "Sports and games" },
    { value: "Cultural", label: "Cultural" },
];

const levelof = [
    { value: "College", label: "College" },
    { value: "State", label: "State" },
    { value: "International", label: "International" },
];

const priz = [
    { value: "First", label: "First" },
    { value: "Second", label: "Second" },
    { value: "Third", label: "Third" },
    { value: "Participation", label: "Participation" },
];

function Activity(props) {
    const [activity, setActivity] = useState("");
    const [prize, setPrize] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [access, setAccess] = useState();
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState([]);
    const [point, setPoint] = useState(0);

    

    // const u = props.location.state.username;
    const user = localStorage.getItem("user");
    // const sem = props.location.state.sem;
    const semR = localStorage.getItem("sem");
    const token = localStorage.getItem("token");

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
    const calculate = () => {


        var points = 3;
        var total=0;

        if(level.value === "International"){
            points=points+10;
        }
        else if(level.value === "State"){
            
            points=points+5;
        }
        else if(level.value === "College"){

            points=points+3;
        }
        
        if(prize.value === "First"){
            points=points+5;
        }
        else if(prize.value === "Second"){
            
            points=points+5;
        }
        else if(prize.value === "Third"){

            points=points+1;
        }
        setPoint(points);

        for (var i=0; i<details.length;i++){
            total = total +details[i].point;
        }
        Axios.post("http://localhost:8001/sempoints", {
            username: user,
            sem:semR,
            point:total+points
        },
        {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }        
        )

    }

    const uploadDetails = (e) => {
        

        const token = localStorage.getItem("token");
        
        
        
        console.log(point);

        var certificatedata = new FormData();

        const image = document.querySelector('input[type="file"]').files[0];

        certificatedata.append("username", user);
        certificatedata.append("sem", semR);
        certificatedata.append("title", activity);
        certificatedata.append("category", category.value);
        certificatedata.append("level", level.value);
        certificatedata.append("prize", prize.value);
        certificatedata.append("point", point);
        certificatedata.append("verify", false);
        certificatedata.append("certificatedata", image);

        fetch(`http://localhost:8001/certi/activity`, {
            method: "POST",
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
            body: certificatedata,
        })
            .then((r) => {
                if (r.status == 200) {
                    alert("Certificate updated successfully");
                } else if (r.status == 422) alert("Invalid File format");
                else if (r.status == 401) alert("Authentication error");
            })
            .catch((err) => console.log(err));

        // Axios.post(
        //     `http://localhost:8001/activity`,
        //     {
        //         username: user,
        //         sem: semR,
        //         activity: activity,
        //         category: category.value,
        //         prize: prize.value,
        //         level: level.value,
        //     },
        //     {
        //         headers: {
        //             // 'Content-Type' :"application/json",
        //             "x-access-token": token,
        //         },
        //     }
        // ).then((response) => {
        //     console.log(response);

        //     // if (response.data.auth) {

        //     //     localStorage.setItem("token", response.data.token);
        //     //     setAccess(true);

        //     // } else {

        //     //     setAccess(false);
        //     //     setMessage(response.data);

        //     // }
        // });
    };
    if (!token) {
        return <Redirect to='/login' />;
    }

    return (
        <div className='mx-5 my-3'>
            <h5 className='dark-blue my-3'>Add New</h5>
            <form className='form-group' onSubmit={uploadDetails}>
                <div class='form-group'>
                    <label for='activity' className='dark-blue purple'>
                        Title
                    </label>
                    <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder=''
                        name='activity'
                        onChange={(e) => {
                            setActivity(e.target.value);
                        }}
                        required
                    ></input>
                </div>
                <div class='form-group'>
                    <label for='category' className='dark-blue purple'>
                        Category
                    </label>
                    <Select
                        defaultValue={category}
                        onChange={setCategory}
                        options={catego}
                    />
                    {/* <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder='Prize'
                        name='prize'
                        onChange={(e) => {
                            setPrize(e.target.value);
                        }}
                        required
                    ></input> */}
                </div>
                <div class='form-group'>
                    <label for='prize' className='dark-blue purple'>
                        Prize Won
                    </label>
                    <Select
                        defaultValue={prize}
                        onChange={setPrize}
                        options={priz}
                    />
                    {/* <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder='Prize'
                        name='prize'
                        onChange={(e) => {
                            setPrize(e.target.value);
                        }}
                        required
                    ></input> */}
                </div>
                <div class='form-group'>
                    <label for='level' className='dark-blue purple'>
                        Achievement Level
                    </label>
                    <Select
                        defaultValue={level}
                        onChange={setLevel}
                        options={levelof}
                    />
                    {/* <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder='Level'
                        name='level'
                        onChange={(e) => {
                            setLevel(e.target.value);
                        }}
                        required
                    ></input> */}
                </div>
                <div class='form-group pt-2'>
                    <input
                        type='file'
                        className='form-control-file'
                        id='exampleFormControlFile1'
                    ></input>
                </div>
                <div className='my-2 d-flex justify-content-end align-items-center'>
                    <div>
                        <button
                            type='button'
                            class='close btn ml-auto py-3 px-4'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn start-btn orange-btn col-6'
                            onClick={calculate}
                        >
                            Submit
                        </button>
                        {/* <button
                            className='btn start-btn orange-btn col-6'
                            type='submit'
                        >
                            Submit
                        </button> */}
                    </div>
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
            {/* <div style={{ textAlign: "center" }}>
                {details.map((item) => (
                    <div key={item.id}>
                        <p>{item.activity}</p>
                        <p>{item.sem}</p>
                    <p>{item.prize}</p>
                    <p>{item.level}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Activity;
