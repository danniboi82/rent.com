import React from 'react';
import {Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import Authform from '../components/Authform';

const Main = props => {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' render={props => <Homepage {...props} /> } />
            </Switch>

            <Switch>
                <Route exact path='/signin' render={props => { return (<Authform buttonText='Log-in' heading='Welcome Back!' {...props} />)}} />
            </Switch>
            <Switch>
                <Route exact path='/signup' render={props => { return (<Authform buttonText='Sign Up!!' heading='Join RENT Today!' {...props} />)}} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}


export default withRouter(connect(mapStateToProps, null)(Main));