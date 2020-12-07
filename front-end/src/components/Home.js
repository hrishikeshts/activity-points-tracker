import React ,{useState} from 'react';
import Select from 'react-select';
import {Link, Redirect} from "react-router-dom"
import axios from 'axios'
 



function Home(props){
    
    const data = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if(!token || !data){
      return <Redirect to="/login"/>;
    }
    

    return (
        <div>
              <div>
                Welcome Mahn...!!
              </div>
              <Link to='/profile'>Profile</Link><br/><br/>

              <Link to='/activity'
                  onClick={ () =>{
                  localStorage.setItem("user", data);
                  localStorage.setItem("sem", "S1");
                }
                 
                }>S1</Link><br/><br/>
              <Link to='/activity'
                  onClick={ () =>{
                  localStorage.setItem("user", data);
                  localStorage.setItem("sem", "S2");
                }
                 
                }>S2</Link><br/><br/>

            <Link to='/logout'>Logout</Link>
        </div>
      

    );
  }

export default Home;