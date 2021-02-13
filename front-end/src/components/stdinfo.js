import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import Axios from "axios";

function StudentInfo(){
    const [details, setDetails] = useState([]);
    const semR = localStorage.getItem("sem");
    const user = localStorage.getItem("student");

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

    return (
        <div>
            Student details
            <div style={{ textAlign: "center" }}>
                            {details.map((item) => (
                                <div key={item.id}>
                                    <p>{item.title}</p>
                                    <p>{item.prize}</p>
                                    <p>{item.level}</p><br/><br/>
                                    <button onClick={() => {
                                        window.open(`http://localhost:8001/${item.image}`);
                                    }} >View Certificate</button>
                                </div>
                                
                            ))}
                        </div>
        </div>
    );
}

export default StudentInfo;