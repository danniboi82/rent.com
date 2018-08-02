import React, {Component} from 'react';

class Authform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        }
    }
    render() {
        const {email, username, password, profileImageUrl} = this.state;
        const {buttonText, heading} = this.props;
        return (
            <div className='row justify-content-md-center text-center'>
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <h2>{heading}</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className='form-control'
                                id='email'
                                onChange={this.handleChange}
                                value='email'
                                name='email'/>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className='form-control'
                                id='password'
                                onChange={this.handleChange}
                                name='password'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Authform;