import React from 'react';
import {Link} from "react-router-dom"
import {Redirect} from "react-router-dom"
import './login.css'

class Loginss extends React.Component {
    
        render() {
             if(this.state.loggedIn){
                 return <Redirect to="/home" />
             }
            return (
            <div className="log-page">
                <h3 style={{color:"#D92027",marginBottom:60}}><b>Brand Name</b></h3>
                <div className="log-box-main">
                    <div className="log-title" style={{backgroundColor:"#fff",color:"#D92027"}}>
                        <b>LogIn</b>
                    </div>
                    <div className="sign-title">
                        <Link to="/signup" style={{color:"#fff",textDecoration:"none"}}><b>Sign Up</b></Link>
                    </div>
                    <div>
                        <form className="form-style" onSubmit={this.createAccount}>
                            <div className="input-box"> 
                                    <input
                                        className="input-ins"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        required
                                        onChange={this.handleInput}>
                                        
                                    </input>
                            </div>
                                
                            <div className="input-box">
                            
                                    <input
                                        className="input-ins"
                                        type="password"
                                        placeholder="Password"
                                        name="password" 
                                        value={this.state.password} 
                                        required
                                        onChange={this.handleInput}>
        
                                    </input>
                            </div>  
                            
                                    
                                
                            <button className="login-btn" style={{marginTop:30}} type="submit">Let's Go!</button>
                                
                                
                            
                        </form>
                        <Link to="/signup">Sign up</Link>
                    </div>
                    
                    </div>
                </div>
                );
        }
}


export default Loginss;