import React from 'react';
import RentalCard from './RentalCard';

export default class RentalContainer extends React.Component {
    render() {
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
                            <div className="rcd2-div">
                                <h3 className="rcd2-d1h31">State:</h3>
                                <select className="rcd2-d1s1" value={this.props.value} onChange={e => this.props.onFilterHosts(e.target.value)}>
                                    <option value="Please choose a state">Please choose a state</option>
                                    <option value="CA">CA</option>
                                    <option value="FL">FL</option>
                                    <option value="MI">MI</option>
                                    <option value="NC">NC</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                </select>
                            </div>
                            <div className="rcd2-div2">
                                <hr />
                                {this.props.hostsData.map(host => <RentalCard host={host} onClickedRental={this.props.onClickedRental} />)}
                            </div>
                        </div>
                    </div>
                    <div className="rct-dv3"></div>
                </div>
            </div>
        )
    }
}