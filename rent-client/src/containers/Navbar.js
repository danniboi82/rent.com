import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src="" alt=""/>
                    </Link>
                    <ul className="nav">
                        <Link to='#' className="nav-item">Sign-in</Link>
                        <Link to='#' className="nav-item">Sign-up</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;