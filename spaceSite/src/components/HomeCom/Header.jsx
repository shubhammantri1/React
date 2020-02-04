import React, { Component } from 'react'
import Home from '../../pages/Home'
import Lessons from '../../pages/Lessons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div className="bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col navbar navbar-expand-lg navbar-dark">
                            <a className="navbar-brand" href="index.html">
                            <img src={require("../../resources/images/logo.png")} width="50" height="50" alt="Space Logo" />
                                Space School
                            </a>
                                <button className="navbar-toggler" type="button"       data-toggle="collapse" data-target="#navbarContent"  aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                            <div id="navbarContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/lessons">Lessons</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
                </div>    
            </div>  
        )
    }
}

export default Header;