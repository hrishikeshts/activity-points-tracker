import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import ShitCheck from "./components/ShitCheck";

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
                    <Route exact path='/' component={Login} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/shit' component={ShitCheck} />
                    <Route path='/home' component={Home} />
                    {/* <Route  path="/profile" component={Profile}/>
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
