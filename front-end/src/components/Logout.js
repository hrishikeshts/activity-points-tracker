import React from 'react';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.state = {
        };
    }

    render() {
        return (

        <div className="logged-out">
            <div>
                <h2><b>Logged Out!!!</b></h2>
                <Link to="/login" 
                    style={{textDecoration:"none",backgroundColor:"#f1f1f1",color:"#101010"}}>
                        {"<< "}Go to Login Page
                </Link>
            </div>
        </div>
        );
    }
}


export default Logout;