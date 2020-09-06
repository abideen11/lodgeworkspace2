import React from 'react';

export default class RentalCard extends React.Component {
    render() {
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
                    </div>
                    {/* <br /> */}
                    <hr />
                </div>
            </div>
        )
    }
}