import React from 'react';

export default class Search extends React.Component {
    render() {
        console.log(this.props.searchData)
        return(
            <div className="div-src">
                <div className="src-div"></div>
                <div className="src-div2"></div>
                <div className="src-div3"></div>
            </div>
        )
    }
}