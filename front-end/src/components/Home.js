import React from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom"
import axios from 'axios'
 



function Home(props){
    
    const data = props.location.state.username;

    return (
        <div>
              <div>
                Welcome Mahn...!!
              </div>
              <Link to={{
                pathname: "/profile",
                state: { username: data }
                }}>Profile</Link><br/><br/>
            <Link to='/logout'>Logout</Link>
        </div>
      

    );
  }

export default Home;