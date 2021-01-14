import React from 'react'
import {Router, Switch, Route} from 'react-router'
import {history} from '../history'
import Login from '../pages/login/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../pages/home/home'


const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component={Login} exact path = "/"></Route>
            <Route component={Home} exact path = "/home"></Route>
           
        </Switch>
    </Router>
)

export default Routes
