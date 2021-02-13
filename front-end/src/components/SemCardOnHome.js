import react, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

export default function SemCard({ data, semno, point }) {

    
    
    return (
        <div className='card-bg sem-card m-3'>
            <Link
                to='/activitylist'
                className='no-underline'
                onClick={() => {
                    localStorage.setItem("user", data);
                    localStorage.setItem("sem", semno);
                }}
            >
                <div className='h-100 w-100 p-3'>
                    <div className='h3 orange'>{semno}</div>
                    <div>Activties Added</div>
            <div>Points Gained: {point}</div>
                </div>
            </Link>
        </div>
        // <article
        //     id={"mem-" + id}
        //     className={"col-8 col-sm-6 col-lg-" + colSize}
        // >
        //     <img src={img} alt={name} id='photo' draggable='false' />
        //     <h4 id='membername'>{name}</h4>
        //     <h5 id='memberdesc'>{description}</h5>
        // </article>
    );
}
