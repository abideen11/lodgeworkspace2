import React from 'react';
import StarRatings from 'react-star-ratings';
export default class RentalReviewForm extends React.Component {
    state = {
        feedback: '',
        rating: 0
    }
    onFeedback = (e) => {this.setState({feedback: e.target.value})}
    onRating = (updateRating) => {this.setState({rating: updateRating})}
    render() {
        console.log(this.props.reviewRental)
        console.log(this.state.rating)
        console.log(this.state.feedback)
        return(
            <div className="div-rrvf">
                <div className="rrvf-div"></div>
                <div className="rrvf-div2">
                    {/* <h1>Fill In</h1> */}
                    <div className="rvf-div"><p>Temproary</p></div>
                    <h1 className="rvf-h">Commitment to Growth</h1>
                    <p className="rvf-p">Always striving to have top notch service, your feedback helps us a lot.
                    Flathopper want to assure customers that we hear them and we always want to rectify any issues 
                    that you have. The reason we keep growing is our penchant to improve the product constantly, listen 
                    to our customers and partners. Please, if you have any thought on the company, do not hesitate 
                    to bring it to our attention.</p>
                    <h1 className="rvf-h2">Review of the {this.props.reviewRental.rental} at {this.props.reviewRental.location}</h1>
                    <p className="rvf-p2"><b>Please give us a rating (5 stars meaning you was very satisfied with the platform):</b></p>
                    {/* <p className="rvf-p3">Temproary</p> */}
                    <div className="rvf-div2">
                        {/* <p></p> */}
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
                </div>
                <div className="rrvf-div3"></div>
            </div>
        )
    }
}