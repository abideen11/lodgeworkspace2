import React from 'react';
import { Link } from 'react-router-dom';

export default class RentalCard extends React.Component {
    render() {
        console.log(this.props.onClickedRental)
        return(
            <div className="div-rcd">
                <div className="rcd-div">
                    {/* <hr /> */}
                    <div className="rcd-dv">
                        {/* <h1>{this.props.host.rental}</h1> */}
                        <div className="rcd-sdv"><img src={this.props.host.rental_img1} alt="plc" /></div>
                        <div className="rcd-sdv2"><h2>{this.props.host.rental}</h2></div>
                        <div className="rcd-sdv3"><p>Location: {this.props.host.location}</p></div>
                        <div className="rcd-sdv4"><p>Price: ${this.props.host.price}</p></div>
                        {
                            // if(this.props.host.location === "Rocky Mount, NC") {}
                            this.props.host.location === "Rocky Mount, NC" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/rockymount" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Ocala, FL" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/ocala" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Mount Pleasant, MI" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/mountpleasant" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Crawford, TN" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/crawford" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            : 
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/greencovesprings" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        }
                        {/* <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/rentalform" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div> */}
                        {/* <span className="rcd-sdv5">Try</span> */}
                    </div>
                    {/* <br /> */}
                    <hr />
                </div>
            </div>
        )
    }
}