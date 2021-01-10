import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitter, faInstagram, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { far, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

import flathopperlogo from './flathopperdigimg.png'
export default class Footer extends React.Component {
    render() {
        return(
            <div className="div-ftr">
                <div className="ftr-div"></div>
                <div className="ftr-div2">
                    <br/>
                    <img src={flathopperlogo} alt="plc" />
                    <br/>
                    <div className="ft2-dv">
                        <h4>Company</h4>
                        <ul className="ft2-ul">
                            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></li>
                            <li><Link to="/careers" style={{ color: 'inherit', textDecoration: 'none' }}> Careers</Link></li>
                        </ul>
                    </div>
                    <div className="ft2-dv2">
                        <h4>Support</h4>
                        <ul className="ft2-ul2">
                            <li><Link to="/customerservice" style={{ color: 'inherit', textDecoration: 'none' }}>Customer Service</Link></li>
                            <li><Link to="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</Link></li>
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
                        <p><FontAwesomeIcon icon={faCopyright} /> 2021 Flathopper. All rights reserved.</p>
                    </div>
                    <div className="ft2-dv10">
                        <p className="ft2d10-p1"><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/temporary">Privacy Policy</Link> Terms & Conditions Ad Choices</p>
                        {/* <p>Testing1</p> */}
                        {/* <p>Testing2</p> */}
                    </div>
                    {/* <span className="ft2-sp1">exp1</span> */}
                    {/* <div className="ft2-ed11">exp1</div> */}
                    {/* <div className="ft2-ed12">exp2</div> */}
                </div>
                <div className="ftr-div3"></div>
            </div>
        )
    }
}