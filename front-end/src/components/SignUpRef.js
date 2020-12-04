import React from 'react';
import {Link} from "react-router-dom"

class SignUpRef extends React.Component {
constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
        name:"",
        email:"",
        password:"",
        address:"",
        phone:"",
        loggedIn
    };
    this.handleInput = this.handleInput.bind(this)
    this.createAccount = this.createAccount.bind(this)
}
    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createAccount(e){
        e.preventDefault()
        const { email, name , password,phone, address} = this.state
        //login Logic
        
    };

    render() {
        return (
            <div className="log-page">
                <h3 style={{color:"#D92027",marginBottom:60}}><b>Brand Name</b></h3>
                <div className="log-box-main">
                    <div className="log-title">
                        <Link to="/" 
                            style={{color:"#fff",textDecoration:"none"}}>
                                <b>LogIn</b>
                        </Link>
                    </div>
                    <div className="sign-title" 
                        style={{backgroundColor:"#fff",color:"#D92027"}}>
                        <b>SignUp</b>
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
                                        type="text"
                                        placeholder="Username"
                                        name="name" 
                                        value={this.state.name} 
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
                            
                            <div className="input-box">
                            
                                    <input
                                        className="input-ins"
                                        type="text"
                                        placeholder="Address"
                                        name="address" 
                                        value={this.state.address} 
                                        required
                                        onChange={this.handleInput}>
        
                                    </input>
                            </div>
                            <div className="input-box">
                            
                                    <input
                                        className="input-ins"
                                        style={{width:250}}
                                        type="tel"
                                        placeholder="Mobile Number"
                                        name="phone"
                                        pattern="[5-9][0-9]{9}"
                                        value={this.state.phone} 
                                        required
                                        onChange={this.handleInput}>
        
                                    </input>
                            </div>
                                    
                                
                            <button className="login-btn" style={{marginTop:20,marginBottom:20}} type="submit">Create account</button>
                                
                                
                            
                        </form>
                        <Link to='/'>Log In</Link>
                    </div>
                    
                    </div>
                </div>
        );
    }
}

export default SignUpRef;