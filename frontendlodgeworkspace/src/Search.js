import React from 'react';
import SearchResult from './SearchResult';

export default class Search extends React.Component {
    render() {
        console.log(this.props.onClickedRental)
        // console.log(this.props.searchData)
        return(
            this.props.searchData.length > 0 ?
            <div className="div-srch">
                <div className="srch-div"></div>
                <div className="srch-div2">
                    <h1>Displaying Results</h1>
                    <br />
                    {this.props.searchData.map(host => <SearchResult host={host} onClickedRental={this.props.onClickedRental} />)}
                </div>
                <div className="srch-div3"></div>
            </div>
            :
            <div className="div-srchalt">
                <div className="srch-div"></div>
                <div className="srch-div2">
                    <h1>We're sorry, we could not find what you were looking for.</h1>
                </div>
                <div className="srch-div3"></div>
            </div>
        )
    }
}