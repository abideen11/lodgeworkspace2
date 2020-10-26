import React from 'react';

export default class Search extends React.Component {
    render() {
        console.log(this.props.searchData)
        return(
            <div className="div-srch">
                <div className="srch-div"></div>
                <div className="srch-div2"></div>
                <div className="srch-div3"></div>
            </div>
        )
    }
}