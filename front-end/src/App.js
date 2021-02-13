import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UserOnboarding from "./components/UserOnboarding";
import Login from "./components/Login";
import TeacherLogin from "./components/TeacherLogin";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import ShitCheck from "./components/ShitCheck";
import Activity from "./components/Activity";
import AdminDash from "./components/AdminDash";
import TeachSign from "./components/TeachSign";
import StudentInfo from "./components/StudentInfo";
import StudentSem from "./components/StudentSem";
import ActivityList from "./components/ActivityList";

// import Checkout from './components/Checkout';
// import Products from './components/Products'
// import Confirmation from './components/Confirmation';
// import Profile from './components/Profile';
// import Payment from './components/Payment';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={UserOnboarding} />
                    <Route path='/login' component={Login} />
                    <Route path='/teacher-login' component={TeacherLogin} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/shit' component={ShitCheck} />
                    <Route path='/home' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/activity' component={Activity} />
                    <Route path='/admindash' component={AdminDash} />
                    <Route path='/adminsign' component={TeachSign} />
                    <Route path='/studentsem' component={StudentSem} />
                    <Route path='/studentinfo' component={StudentInfo} />
                    <Route path='/activitylist' component={ActivityList} />
                    {/* 
          <Route path="/checkout" component={Checkout}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/confirm" component={Confirmation}/>
          */}
                    <Route path='/logout' component={Logout} />
                </Switch>
            </BrowserRouter>

            // <Home/>
        );
    }
}

export default App;
