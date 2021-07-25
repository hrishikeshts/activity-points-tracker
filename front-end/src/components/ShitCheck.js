import React from 'react';
import Axios from 'axios';

function ShitCheck() {

    const userAuth = () =>{
        Axios.get("/isAuth", {
            headers:{
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <div>
            <button onClick={userAuth}>
                ClickME
            </button>
        </div>
    );
}


export default ShitCheck;