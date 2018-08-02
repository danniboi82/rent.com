import React from 'react';

const Authform = props => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' />
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name='username' />
                </div>
            </form>
        </div>
    )
}

export default Authform;