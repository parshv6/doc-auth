import React from "react";
import Signup from "./authentication/Signup";
import {Container} from "react-bootstrap"
import {AuthProvider } from "../contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from './authentication/Login'
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"




function App() {
  return (
       <Router>
         <AuthProvider>
            <Switch>

            {/* DOC VAULT ROUTES */}
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute exact path="/folder/:folderId" component={Dashboard}/>


            {/* USER ROUTES */}
             <PrivateRoute  path="/user" component={Profile}/>
             <PrivateRoute  path="/update-profile" component={UpdateProfile}/>



             {/* AUTH ROUTES */}
             <Route path="/signup" component={Signup}></Route> 
             <Route path="/login" component={Login}/>
             <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
         </AuthProvider>
       </Router>
  );
}

export default App;
