import React from 'react';
import { Link } from 'react-router-dom';

import flathopperimg from './flathopperdigimg2.png'

export default class Register extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        hasRegistered: false
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onHasRegistered = () => {
        this.setState({hasRegistered: !this.state.hasRegistered})
    }
    login = e => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirmation: this.state.confirmPassword
                }
            })
        })
        .then(r => r.json())
        .then(newUser => {
            console.log(newUser)
            this.onHasRegistered()
        })
    }
    render() {
        return(
            this.state.hasRegistered ? 
            <div className="div-rgs">
                <div className="rgs-div">
                    <div className="rgs-d1"></div>
                    <div className="rgs-d3">
                        <h1>Thank you for registering</h1>
                        <br />
                        <h2>Log In</h2>
                        <br />
                        <div><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                    </div>
                </div>
            </div>
            :
            <div className="div-rgs">
                <div className="rgs-div">
                    <div className="rgs-d1">
                        <p><img src={flathopperimg} alt="plc" /></p>
                    </div>
                    <div className="rgs-d3">
                        <h1>Register</h1>
                        <br />
                        <br />
                        <form onSubmit={e => this.login(e)}>
                            <label className="rgs-2lb">Username or Email Address:
                            {" "}<input className="rgs-2ip" onChange={this.handleChange} name="username" placeholder="" type="username"></input>
                            </label>
                            <br />
                            <br />
                            <label className="rgs-2lb2">Password:
                            {" "}<input className="rgs-2ip2" onChange={this.handleChange} name="password" placeholder="" type="password"></input>
                            </label>
                            <br />
                            <br />
                            <label className="rgs-2lb3">Confirm Password:
                            {" "}<input className="rgs-2ip3" onChange={this.handleChange} name="confirmPassword" placeholder="" type="password"></input>
                            </label>
                            <br />
                            <br />
                            <input className="rgs-2ip4" type="submit" />
                        </form>
                        <br />
                        <p>Already have a account? <Link to="/login">Log In</Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}