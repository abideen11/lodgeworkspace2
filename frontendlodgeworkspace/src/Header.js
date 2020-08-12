import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
    render() {
        return(
            <div className="div-hdr">
                <div className="hdr-col"></div>
                <div className="hdr-col2">
                    <div title="Flathopper" className="hdr-div">
                        <span className="hd-sp">Insert Here</span>
                    </div>
                    <div title="Book Rental" className="hdr-div3">
                        <span className="hd3-sp">Book Rental</span>
                    </div>
                    <div title="Write A Review" className="hdr-div4">
                        <span className="hd4-sp">Write A Review</span>
                    </div>
                    <div className="div-src">
                        <input className="inp-src" type="text" placeholder="Search" />
                        <span className="img-src"><FontAwesomeIcon icon={faSearch} /></span>
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