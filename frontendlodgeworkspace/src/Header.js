import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
    render() {
        return(
            <div className="div-hdr">
                <div className="hdr-col"></div>
                <div className="hdr-col2">
                    <div className="hdr-div">
                        <span className="hd-sp">Insert Here</span>
                    </div>
                    <div className="hdr-div2">
                        <span className="hd2-sp">Account <FontAwesomeIcon icon={faUserCircle} /></span>
                        <div className="hdr-div3">
                            <ul className="hd3-ul">
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