import React from 'react';

export default class RentalCard extends React.Component {
    render() {
        return(
            <div className="div-rcd">
                <div className="rcd-div">
                    {/* <hr /> */}
                    <div className="rcd-dv">
                        <h1>{this.props.host.rental}</h1>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}