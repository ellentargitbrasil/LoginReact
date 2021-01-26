import React from 'react'
import {Router, Switch, Route} from 'react-router'
import {history} from '../history'
import Login from '../pages/login/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../pages/home/home'
import List from '../components/cliente-list.component'
import CreateUser from './create-cliente.component';
import PrivateRoute from '../components/PrivateRoute'

const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component={Login} exact path = "/"></Route>
            <PrivateRoute component={Home} exact path = "/home"></PrivateRoute>
            <Route component = {CreateUser} exact path="/create"></Route>
            <Route component = {List} exact path ="/list"></Route>
         
           
        </Switch>
    </Router>
)

export default Routes
