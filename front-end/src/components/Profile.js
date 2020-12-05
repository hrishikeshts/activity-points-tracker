import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Profile(props){

    const [details, setDetails] = useState({});
    const u = props.location.state.username;

    useEffect(() => {
        
        Axios.get(`http://localhost:8001/${u}/user`, {
            headers:{
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {

            setDetails(response.data);
            // console.log(response.data);
        });
    }, []);

    return (
        <div>
            <p>User name:{details.username}</p><br/>
            <p>Email:{details.email}</p><br/>
            <p>Address:{details.address}</p><br/>
            <p>Phone:{details.phoneno}</p><br/>
            
        </div>
    );
}

export default Profile;