import { faClock, faDollarSign, faHome, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


export default class Rentalocala extends React.Component {
    state = {
        rentalImg1: true,
        currentDate: new Date(),
        beginDate: new Date(),
        endDate: new Date(),
        lodgingFee: 0,
        lodgingFee_fixed: 0,
        serviceFee_fixed: 0,
        total_fixed: 0,
        bookedLodging: false,
        bookedRental: {
            name: this.props.clickedRental.name,
            age: this.props.clickedRental.age,
            location: this.props.clickedRental.location,
            rental: this.props.clickedRental.rental,
            max_days: this.props.clickedRental.max_days,
            price: this.props.clickedRental.price,
            rental_Img1: this.props.clickedRental.rental_img1,
            rental_Img2: this.props.clickedRental.rental_img2,
            begin_Date: null,
            end_Date: null,
            days: null,
            lodging_Fee_fixed: null,
            service_Fee_fixed: null,
            total__fixed: null,
            receiptNumber: null
        }
    }
    showRentalImg1 = () => {this.setState({rentalImg1: true})}
    notShowRentalImg1 = () => {this.setState({rentalImg1: false})}
    onBeginDate = (date) => {this.setState({beginDate: date})}
    onEndDate = (date) => {this.setState({endDate: date})}
    onFees = () => {
        this.setState({
            lodgingFee: ((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price,
            lodgingFee_fixed: (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price).toFixed(2),
            serviceFee_fixed: (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price*0.15).toFixed(2),
            total_fixed: ((((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price) + (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price*0.15)).toFixed(2)
        })
    }
    onBookedRental = () => {
        this.setState(i => ({
            bookedRental: {
                ...i.bookedRental,
                begin_Date: this.state.beginDate,
                end_Date: this.state.endDate,
                days: (this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24),
                lodging_Fee_fixed: (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price).toFixed(2),
                service_Fee_fixed: (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price*0.15).toFixed(2),
                total__fixed: ((((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price) + (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price*0.15)).toFixed(2),
                receiptNumber: Math.floor(Math.random() * 999999) + 100000

            }
        }))
    }
    isDateValid = () => {
        if(this.state.currentDate.getTime() > this.state.beginDate.getTime()) {
            alert("Please choose a valid check-in date.")
        }
        if(this.state.endDate.getTime() < this.state.beginDate.getTime()) {
            alert("Please choose a valid check-out date.")
        }
        if(this.state.beginDate.getTime() > this.state.currentDate.getTime() && this.state.endDate.getTime() > this.state.beginDate.getTime()) {
            if(((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24)) <= this.props.clickedRental.max_days) {
                this.onFees()
                this.onBookedRental()
            }
            else {
                alert("Please choose a check-in date and a check-out date where the days between is equal or less than the days next to the clock.")
            }
        }
    }
    addRental = () => {
        this.props.allRentals.push(this.state.bookedRental)
    }
    render() {
        return(
            <div className="div-rfm">
                <div className="rfm-div"></div>
                <div className="rfm-div2">
                    <br />
                    <div className="rdv2-div">
                        {
                            this.state.rentalImg1 ?
                            <img src={this.props.clickedRental.rental_img1} alt="plc" />
                            :
                            <img src={this.props.clickedRental.rental_img2} alt="plc" />
                        }
                    </div>
                    <div className="rdv2-div2">
                        <div className="dv2-rfm" onClick={() => this.showRentalImg1()}><img src={this.props.clickedRental.rental_img1} alt="plc" /></div>
                        <div className="dv2-rfm2" onClick={() => this.notShowRentalImg1()}><img src={this.props.clickedRental.rental_img2} alt="plc" /></div>
                    </div>
                    <div className="rdv2-div3">
                        <p>
                            It's not only the beach you have to go to whenever you are in Florida. There are
                            many scenic places and events happening year-round. Go to Universal Studios in
                            Orlando or wherever the excitement is.
                        </p>
                    </div>
                    <div className="rdv2-div4"><h1>Rental Details</h1></div>
                    <div className="rdv2-div5">
                        <p className="rdv2-div5p1"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.clickedRental.location}</p>
                        <p className="rdv2-div5p2"><FontAwesomeIcon icon={faHome} /> {this.props.clickedRental.rental}</p>
                        <p className="rdv2-div5p3"><FontAwesomeIcon icon={faDollarSign} /> ${this.props.clickedRental.price}/Day</p>
                        <p className="rdv2-div5p4"><FontAwesomeIcon icon={faClock} /> {this.props.clickedRental.max_days} Days</p>
                        <p className="rdv2-div5p5"><FontAwesomeIcon icon={faUser} /> {this.props.clickedRental.name}</p>
                    </div>
                    <div className="rdv2-div6"><h1>Book Rental</h1></div>
                    <div className="rdv2-div7">
                        <p className="rdv2-div7p1">Please choose a check-in date:</p>
                        <div className="rdv2-div7d1"><DatePicker selected={this.state.beginDate} onChange={this.onBeginDate} /></div>
                        <p className="rdv2-div7p2">Please choose a check-out date:</p>
                        <div className="rdv2-div7d2"><DatePicker selected={this.state.endDate} onChange={this.onEndDate} /></div>
                        <span className="rdv2-div7s1" onClick={this.isDateValid}>Book</span>
                    </div>
                    <br />
                    <br />
                    <div className="rdv2-div8">
                        <div className="rdv2-div8d1">
                            <p>Fees:</p>
                            <hr />
                        </div>
                        <p className="rdv2-div8p1">Lodging:</p>
                        <p className="rdv2-div8p2">${this.state.lodgingFee_fixed}</p>
                        <p className="rdv2-div8p3">Service fee (15%):</p>
                        <p className="rdv2-div8p4">${this.state.serviceFee_fixed}</p>
                        <p className="rdv2-div8p5">Total:</p>
                        <p className="rdv2-div8p6">${this.state.total_fixed}</p>
                        {
                            this.state.lodgingFee > 0 && (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24)) <= this.props.clickedRental.max_days) && this.state.endDate.getTime() > this.state.beginDate.getTime() ?
                            <div className="rdv2-div8s1" onClick={() => {this.props.onReservedRental(this.state.bookedRental); this.addRental()}}><Link to="/rentalreceipt" style={{ color: 'inherit', textDecoration: 'none' }}>Accept</Link></div> 
                            :
                            <div className="rdv2-div8s1alt" disabled>Accept</div>
                        }
                    </div>
                </div>
                <div className="rfm-div3"></div>
            </div>
        )
    }
}