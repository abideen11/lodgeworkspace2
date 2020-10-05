import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHome, faMapMarked, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export default class Rentalrockymount extends React.Component {
    state = {
        rentalImg1: true,
        currentDate: new Date(),
        beginDate: new Date(),
        endDate: new Date(),
        currentTime: null,
        beginTime: null,
        lodgingFee: 0,
        serviceFee: 0,
        total: 0,
        bookedLodging: false
    }
    showRentalImg1 = () => {this.setState({rentalImg1: true})}
    notShowRentalImg1 = () => {this.setState({rentalImg1: false})}
    onBeginDate = (date) => {
        this.setState({
            beginDate: date
        })
    }
    currentAndBeginTime = () => {
        this.setState({
            currentTime: this.state.currentDate.getTime(),
            beginTime: this.state.beginDate.getTime()
        })
    }
    onEndDate = (date) => {this.setState({endDate: date})}
    onFees = () => (
        this.setState({
            lodgingFee: ((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price,
            serviceFee: Math.round((((((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price)*0.15) + Number.EPSILON)*10)/10,
            total: (((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price) + Math.round((((((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))*this.props.clickedRental.price)*0.15) + Number.EPSILON)*10)/10
        })
    )
    isDateVaild = () => {
        if(this.state.currentDate.getTime() > this.state.beginDate.getTime()) {
            alert("Please choose a valid check-in date.")
        }
        if(this.state.endDate.getTime() < this.state.beginDate.getTime()) {
            alert("Please enter a valid check-out date.")
        }
        if(this.state.beginDate.getTime() > this.state.currentDate.getTime() && this.state.endDate.getTime() > this.state.beginDate.getTime()) {
            if(((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24)) <= this.props.clickedRental.max_days) {
                alert("Valid dates")
                this.onFees()
                // this.setState({bookedLodging: true})
            }
            else {
                alert("please enter dates equal or below max days")
            }
        }
    }
    onBookedLodging = () => {
        if(this.state.lodgingFee > 0) {
            this.setState({bookedLodging: true})
        }
        else {
            alert("Please select dates")
        }
    }
    render() {
        // console.log(this.props.clickedRental)
        console.log((this.state.endDate.getTime() - this.state.beginDate.getTime())/(1000*3600*24))
        console.log(this.state.beginDate)
        console.log(this.state.endDate)
        console.log(this.state.currentTime,"current")
        console.log(this.state.beginTime,"begin")
        // console.log(this.state.changedDate)
        return(
            this.state.bookedLodging ? <p>Thank you</p> :
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
                        <p>Located in the Tar Heel State. Rock Mount offers a place to have a nice
                            gathering that the whole family can enjoy. It has a manageable distance
                            to reach Raleigh, where you can kayak and go biking.
                        </p>
                    </div>
                    <div className="rdv2-div4">
                        <h1>Rental Details</h1>
                    </div>
                    <div className="rdv2-div5">
                        <p className="rdv2-div5p1"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.clickedRental.location}</p>
                        <p className="rdv2-div5p2"><FontAwesomeIcon icon={faHome} /> {this.props.clickedRental.rental}</p>
                        <p className="rdv2-div5p3"><FontAwesomeIcon icon={faDollarSign} /> ${this.props.clickedRental.price}/Day</p>
                        <p className="rdv2-div5p4"><FontAwesomeIcon icon={faClock} /> {this.props.clickedRental.max_days} Days</p>
                        <p className="rdv2-div5p5"><FontAwesomeIcon icon={faUser} /> {this.props.clickedRental.name}</p>
                    </div>
                    <br />
                    <div className="rdv2-div6">
                        <h1>Book Rental</h1>
                    </div>
                    <div className="rdv2-div7">
                        <p className="rdv2-div7p1">Please choose your check-in date:</p>
                        <div className="rdv2-div7d1"><DatePicker selected={this.state.beginDate} onChange={this.onBeginDate} /></div>
                        <p className="rdv2-div7p2">Please choose your check-out date:</p>
                        <div className="rdv2-div7d2"><DatePicker selected={this.state.endDate} onChange={this.onEndDate} /></div>
                        <span className="rdv2-div7s1" onClick={this.isDateVaild}>Book</span>
                        {/* <div className="rdv2-div7d3">
                            <p>Test</p>
                        </div> */}
                        {/* <div className="rdv2-div7d3">Test</div> */}
                    </div>
                    {/* <br /> */}
                    <br />
                    <br />
                    {/* <h1>Testing</h1> */}
                    <div className="rdv2-div8">
                        {/* <p className="rdv2-div8p1">Fees</p> */}
                        <div className="rdv2-div8d1">
                            <p>Fees:</p>
                            <hr />
                        </div>
                        <p className="rdv2-div8p1">Lodging:</p>
                        <p className="rdv2-div8p2">{this.state.lodgingFee}</p>
                        <p className="rdv2-div8p3">Service fee (15%):</p>
                        <p className="rdv2-div8p4">{this.state.serviceFee}</p>
                        <p className="rdv2-div8p5">Total:</p>
                        <p className="rdv2-div8p6">{this.state.total}</p>
                        <span className="rdv2-div8s1" onClick={this.onBookedLodging}>Accept</span>
                    </div>
                    <p>{this.props.clickedRental.rental}</p>
                </div>
                <div className="rfm-div3"></div>
            </div>
        )
    }
}