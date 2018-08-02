import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import madman from '../images/csgo.jpg'; 

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={madman} alt="" width='55px'/>
                    </Link>
                    <div className="navbar-nav nav ml-auto">
                        <Link to='/signup' className="nav-item">Sign-up</Link>
                        <Link to='/signin' className="nav-item">Sign-in</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;