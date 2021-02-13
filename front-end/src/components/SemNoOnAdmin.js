import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function SemNo({ semno }) {
    return (
        <Link
            className='no-underline'
            to='/studentinfo'
            onClick={() => {
                localStorage.setItem("sem", semno);
            }}
        >
            <div className='my-2 py-1 px-3'>{semno}</div>
        </Link>
    );
}
