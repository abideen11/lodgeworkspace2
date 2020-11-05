import React from 'react';
import RentalCard from './RentalCard';

export default class RentalContainer extends React.Component {
    render() {
        console.log(this.props.onClickedRental)
        return(
            <div className="div-rct">
                <div className="rct-div">
                    <img src="https://www.visitnj.org/sites/default/files/MilesScenicKMP_Delaware-Water-Gap_645x415.jpg" alt="plc" />
                    <h1>New Sceneries</h1>
                </div>
                <div className="rct-div2">
                    <div className="rct-dv"></div>
                    <div className="rct-dv2">
                        <h1>Explore What Life Has to Offer</h1>
                        <br />
                        <br />
                        <br />
                        <h2>Check Out Some Listings</h2>
                        <br />
                        <div className="rcd2-dv">
                            <div className="rcd2-div"></div>
                            <div className="rcd2-div2">
                                <hr />
                                {this.props.hosts.map(host => <RentalCard host={host} onClickedRental={this.props.onClickedRental} />)}
                            </div>
                        </div>
                    </div>
                    <div className="rct-dv3"></div>
                </div>
            </div>
        )
    }
}