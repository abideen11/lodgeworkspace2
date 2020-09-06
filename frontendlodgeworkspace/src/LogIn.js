import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return(
            <div className="div-log">
                <div className="log-div">
                    <h1>Log In</h1>
                    <input name="username" placeholder="Username or Email" type="username" />
                    <br />
                    <br />
                    <input name="password" placeholder="Password" type="password" />
                </div>
            </div>
        )
    }
}