import React from 'react';
import { Link } from 'react-router-dom';

export default class LogIn extends React.Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = e => {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.token = data.token
            localStorage.id = data.id
            this.props.history.push("/")
            console.log(data)
        })
    }
    render() {
        return(
            <div className="div-rgs">
                <div className="rgs-div">
                    <div className="rgs-d1"></div>
                    <div className="rgs-d3">
                        <h1>Log In</h1>
                        <br />
                        <br />
                        <form onSubmit={e => this.login(e)}>
                            <label className="rgs-2lb">Username or Email Address:
                            {" "}<input className="rgs-2ip" onChange={this.handleChange} name="username" placeholder="" type="username"></input>
                            </label>
                            <br />
                            <br />
                            <label className="rgs-2lb">Password:
                            {" "}<input className="rgs-2ip2" onChange={this.handleChange} name="password" placeholder="" type="password"></input>
                            </label>
                            <br />
                            <br />
                            <input className="rgs-2ip4" type="submit" />
                        </form>
                        <br />
                        <p>Don't have a account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}