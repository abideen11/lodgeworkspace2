import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeFirst extends React.Component {
    render() {
        return(
            <div className="div-hfs">
                <div className="hfs-div"></div>
                <div className="hfs-div2">
                    <h1>Explore New Horizons</h1>
                    <h3>South Beach, Graceland, Disney World, Universal Studios & More</h3>
                    <div className="hf2-div">
                        <div className="hf2-dv"></div>
                        <div className="hf2-dv2">
                            <div className="hf2d-dv"></div>
                            <div className="hf2d-dv2"></div>
                            <div className="hf2d-dv3"></div>
                            <div className="hf2d-dv4"></div>
                        </div>
                        <div className="hf2-dv3"></div>
                    </div>
                    <span><Link to="/rentals" style={{ color: 'inherit', textDecoration: 'none' }}>See All Options</Link></span>
                </div>
                <div className="hfs-div3"></div>
            </div>
        )
    }
}