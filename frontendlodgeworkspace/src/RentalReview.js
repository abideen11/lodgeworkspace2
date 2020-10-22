import React from 'react';
import RentalReviewCard from './RentalReviewCard';

export default class RentalReview extends React.Component {
    render() {
        console.log(this.props.allRentals)
        return(
            this.props.allRentals.length > 0 ? 
            <div className="div-rrv">
                <div className="rrv-div"></div>
                <div className="rrv-div2">
                    {/* <div className="rrv-dv2"></div> */}
                    <h1>This Is Rental Review Page</h1>
                    <div className="rrv-d2d">
                        {this.props.allRentals.map(rent => <RentalReviewCard rent={rent} onReviewRental={this.props.onReviewRental} />)}
                        <br />
                    </div>
                </div>
                <div className="rrv-div3"></div>
            </div>
            :
            <div className="div-rrv">
                <div className="rrv-div"></div>
                <div className="rrv-div2">
                    <h1>Please Return to This Page After You Checked Out of Your Rental</h1>
                </div>
                <div className="rrv-div3"></div>
            </div>
        )
    }
}