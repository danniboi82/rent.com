import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = props => {
    return (
        <div className="container-fluid home-hero text-center">
            <div className="row">
                <h1 style={{
                    margin: 'auto'
                }}>Make some CASH or find CHEAP rental items!!</h1>
                <div className="col-sm-6">
                    <h4>Want to start making some MONEY??</h4><br/>
                    <Link to='#' className='btn btn-outline-info'>Make CASH NOW!!</Link>
                </div>
                <div className="col-sm-6">
                    <h4>Need to rent something you can't OR don't want to buy?</h4>
                    <Link to='#' className='btn btn-outline-info'>Find Bargain Rentals</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;