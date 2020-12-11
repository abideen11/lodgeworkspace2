import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default class SearchResult extends React.Component {
    render() {
        return(
            localStorage.token ?
            <div className="div-srs">
                <div className="srs-div">
                    <img src={this.props.host.rental_img1} alt="plc" />
                    <p className="srs-p1">Location: {this.props.host.location}</p>
                    <p className="srs-p2">Rental: {this.props.host.rental}</p>
                    <p className="srs-p3">Price: ${this.props.host.price}</p>
                    {
                        this.props.host.location === "Rocky Mount, NC" ?
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/rockymount" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        :
                        this.props.host.location === "Ocala, FL" ?
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/ocala" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        :
                        this.props.host.location === "Mount Pleasant, MI" ?
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/mountpleasant" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        :
                        this.props.host.location === "Crawford, TN" ?
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/crawford" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        :
                        this.props.host.location === "Green Cove Springs, FL" ?
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/greencovesprings" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        :
                        <div className="srs-dv1" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/salinas" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                    }
                </div>
                <br />
            </div>
            : 
            <div className="div-srs">
                <div className="srs-div">
                    <img src={this.props.host.rental_img1} alt="plc" />
                    <p className="srs-p1">Location: {this.props.host.location}</p>
                    <p className="srs-p2">Rental: {this.props.host.rental}</p>
                    <p className="srs-p3">Price: ${this.props.host.price}</p>
                    {
                        this.props.host.location === "Rocky Mount, NC" ?
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                        :
                        this.props.host.location === "Ocala, FL" ?
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                        :
                        this.props.host.location === "Mount Pleasant, MI" ?
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                        :
                        this.props.host.location === "Crawford, TN" ?
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                        :
                        this.props.host.location === "Green Cove Springs, FL" ?
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                        :
                        <div className="srs-dv1"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></div>
                    }
                </div>
                <br />
            </div>
        )
    }
}