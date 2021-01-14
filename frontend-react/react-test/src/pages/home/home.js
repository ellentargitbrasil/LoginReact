import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "../../../src/components/navbar.component"

import EditCliente from "../../../src/components/edit-cliente.component";
import CreateUser from '../../../src/components/create-cliente.component';
import ClienteList from '../../../src/components/cliente-list.component';

function home() {
  return (

    <Router>
    <div className="container">
    <Navbar />
    <br/>
    
    <Route path="/edit/" component={EditCliente} />
    <Route path="/create" component={CreateUser} />
    <Route path ="/list" component= {ClienteList}/>
   
    </div>
  </Router>
  );
 
}

export default home;
