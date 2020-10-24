import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitter, faInstagram, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { far, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
export default class Footer extends React.Component {
    render() {
        return(
            <div className="div-ftr">
                <div className="ftr-div"></div>
                <div className="ftr-div2">
                    <br/>
                    <span title="Flathopper">Insert Here</span>
                    <br/>
                    <div className="ft2-dv">
                        <h4>Company</h4>
                        <ul className="ft2-ul">
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="ft2-dv2">
                        <h4>Support</h4>
                        <ul className="ft2-ul2">
                            <li>Customer Service</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div title="Facebook" className="ft2-dv3">
                        <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </div>
                    <div title="Twitter" className="ft2-dv4">
                        <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                    <div title="Instagram" className="ft2-dv5">
                        <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                    <div title="LinkedIn" className="ft2-dv6">
                        <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </div>
                    <div title="Pinterest" className="ft2-dv7">
                        <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faPinterestP} /></Link>
                    </div>
                    <br/>
                    <div className="ft2-dv8">
                        <hr/>
                    </div>
                    <div className="ft2-dv9">
                        <p><FontAwesomeIcon icon={faCopyright} /> 2020 Flathopper. All rights reserved.</p>
                    </div>
                </div>
                <div className="ftr-div3"></div>
            </div>
        )
    }
}