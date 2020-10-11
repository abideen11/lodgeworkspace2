import React from 'react';

export default class RentalReceipt extends React.Component {
    render() {
        console.log(this.props.reservedRental)
        return(
            <div className="div-rre">
                <div className="rre-div"></div>
                <div className="rre-div2">
                    <h1 className="rre-div2h1">Rental Receipt</h1>
                    <br />
                    <br />
                    <div className="rrd2-div">
                        <h1>Receipt #: {Math.floor(Math.random() * 999999) + 100000}</h1>
                        {/* <h1>Math.floor  </h1> */}
                        {/* <h1>{} </h1> */}
                        <br />
                        <br />
                        <p className="rrd2-p1">Renter Name: {this.props.reservedRental.name}</p>
                        <p className="rrd2-p2">Location: {this.props.reservedRental.location}</p>
                        <p className="rrd2-p3">Rental: {this.props.reservedRental.rental}</p>
                        <p className="rrd2-p4">Price: {this.props.reservedRental.price}</p>
                        {/* <p className="rrd2-p5">From: {this.props.reservedRental.begin_Date.getDate()}</p> */}
                        {/* <p className="rrd2-p6">To: {this.props.reservedRental.end_Date}</p> */}
                        {/* <p className="rrd2-p7">Total Days: {this.props.reservedRental.days}</p> */}
                        {/* <p className="rrd2-p8">Lodging: {this.props.reservedRental.lodging_Fee}</p> */}
                        {/* <p className="rrd2-p9">Service Fee: {this.props.reservedRental.service_Fee}</p> */}
                    </div>
                    <br />
                </div>
                <div className="rre-div3"></div>
            </div>
        )
    }
}