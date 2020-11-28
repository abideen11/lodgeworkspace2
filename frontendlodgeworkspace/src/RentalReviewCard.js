import React from 'react';
import { Link } from 'react-router-dom';

export default class RentalReviewCard extends React.Component {
    state = {
        options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
    render() {
        return(
            <div className="div-rrvc">
                {/* <br /> */}
                <div className="rrvc-div">
                    <p className="rrvc-p"><b>Receipt #: {this.props.rent.receiptNumber}</b></p>
                    <img className="rrvc-i" src={this.props.rent.rental_Img1} alt="plc" />
                    <p className="rrvc-p2">From: {this.props.rent.begin_Date.toLocaleDateString('en-US', this.state.options)}</p>
                    <p className="rrvc-p3">To: {this.props.rent.end_Date.toLocaleDateString('en-US', this.state.options)}</p>
                    <p className="rrvc-p4">Amount Paid: ${this.props.rent.total__fixed}</p>
                    <div className="rrvc-d" onClick={() => this.props.onReviewRental(this.props.rent)}><Link to="/rentalreview" style={{ color: 'inherit', textDecoration: 'none' }}>Review</Link></div>
                </div>
                {/* <br /> */}
            </div>
        )
    }
}