import React from 'react';

export default class Rentalcrawford extends React.Component {
    render() {
        return(
            <div className="div-rfm">
                <div className="rfm-div">
                    <h1>Testing</h1>
                    <p>{this.props.clickedRental.rental}</p>
                </div>
            </div>
        )
    }
}