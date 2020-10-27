import React from 'react';

export default class RentalFavorites extends React.Component {
    render() {
        console.log(this.props.favorites)
        return(
            <div className="div-fve">
                <div className="fve-div"></div>
                <div className="fve-div2"></div>
                <div className="fve-div3"></div>
            </div>
        )
    }
}