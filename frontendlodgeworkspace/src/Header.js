import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <div className="div-hdr">
                <div className="hdr-col"></div>
                <div className="hdr-col2">
                    <div title="Flathopper" className="hdr-div">
                        <span className="hd-sp"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Insert Here</Link></span>
                    </div>
                    <div title="Book Rental" className="hdr-div3">
                        <span className="hd3-sp"><Link to="/rentals" style={{ color: 'inherit', textDecoration: 'none' }}>Book Rental</Link></span>
                    </div>
                    <div title="Write A Review" className="hdr-div4">
                        <span className="hd4-sp"><Link to="/writereview" style={{ color: 'inherit', textDecoration: 'none' }}>Write A Review</Link></span>
                    </div>
                    <div title="Favorites" className="hdr-div5">
                        <span className="hd5-sp">Favorites</span>
                    </div>
                    <div className="div-src">
                        <input className="inp-src" type="text" value={this.props.value} onChange={(e) => this.props.onSearch(e.target.value)} placeholder="Search" />
                        <span className="img-src"><Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link></span>
                    </div>
                    <div className="hdr-div2">
                        <span className="hd2-sp">Account <FontAwesomeIcon icon={faUserCircle} /></span>
                        <div className="hd2-div">
                            <ul className="hd2-ul">
                                <li>Log In</li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hdr-col3"></div>
            </div>
        )
    }
}