import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import flathopperimg from './flathopperdigimg2.png'

export default class RentalReviewForm extends React.Component {
    state = {
        feedback: '',
        rating: 0
    }
    onFeedback = (e) => {this.setState({feedback: e.target.value})}
    onRating = (updateRating) => {this.setState({rating: updateRating})}
    render() {
        return(
            <div className="div-rrvf">
                <div className="rrvf-div"></div>
                <div className="rrvf-div2">
                    <div className="rvf-div"><p><img src={flathopperimg} alt="plc" /></p></div>
                    <h1 className="rvf-h">Commitment to Growth</h1>
                    <p className="rvf-p">
                        Always striving to have top-notch service, your feedback helps us a lot.
                        Flathopper wants to assure customers that we hear them, and we always want to rectify any issues
                        that you have. The reason we keep growing is our penchant to improve the product constantly, listen
                        to our customers and partners. Please, if you have any thoughts on the company, do not hesitate
                        to bring it to our attention.
                    </p>
                    <h1 className="rvf-h2">Review of the {this.props.reviewRental.rental} in {this.props.reviewRental.location}</h1>
                    <p className="rvf-p2"><b>Please give us a rating (5 stars meaning you were very satisfied with the platform):</b></p>
                    <div className="rvf-div2">
                        <StarRatings
                            rating={this.state.rating}
                            starEmptyColor="grey"
                            starHoverColor="yellow"
                            starRatedColor="yellow"
                            changeRating={this.onRating}
                            numberOfStars={5}
                        />
                    </div>
                    <p className="rvf-p4"><b>Please tell us why you gave us this rating.</b></p>
                    <textarea className="rvf-txt" value={this.state.feedback} onChange={this.onFeedback}></textarea>
                    {
                        this.state.feedback.length > 0 && this.state.rating > 0 ?
                        <div className="rvf-div3" onClick={() => this.props.hasReviewedRental()}><Link to="/rentalreviewprompt" style={{ color: 'inherit', textDecoration: 'none' }}>Submit</Link></div>
                        :
                        <div className="rvf-div3alt" disabled>Submit</div>
                    }
                </div>
                <div className="rrvf-div3"></div>
            </div>
        )
    }
}