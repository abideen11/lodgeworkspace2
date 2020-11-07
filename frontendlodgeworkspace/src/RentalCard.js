import { faHeart } from '@fortawesome/free-solid-svg-icons' 
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default class RentalCard extends React.Component {
    state = {
        fave: this.props.host.fave
    }
    changeFavorite = () => {
        this.setState({
            fave: !this.state.fave
        })
    }
    
    onHeartClicked = (host) => {
        console.log("Clicked fave")
        // Update the state of the fave on the server
        fetch(`http://localhost:3000/hosts/${host.id}/favourite`, {method: "POST", mode: "cors"})
        .then(() => { console.log("Updated fave on the server") })

        // Update the state of the heart in the browser
        this.changeFavorite()
    }
    render() {
        return(
            <div className="div-rcd">
                <div className="rcd-div">
                    <div className="rcd-dv">
                        <div className="rcd-sdv"><img src={this.props.host.rental_img1} alt="plc" /></div>
                        <div className="rcd-sdv2"><h2>{this.props.host.rental}</h2></div>
                        <div className="rcd-sdv3"><p>Location: {this.props.host.location}</p></div>
                        <div className="rcd-sdv4"><p>Price: ${this.props.host.price}</p></div>
                        {
                            this.props.host.location === "Rocky Mount, NC" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/rockymount" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Ocala, FL" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/ocala" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Mount Pleasant, MI" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/mountpleasant" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            :
                            this.props.host.location === "Crawford, TN" ?
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/crawford" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                            : 
                            <div className="rcd-sdv5" onClick={() => this.props.onClickedRental(this.props.host)}><Link to="/greencovesprings" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></div>
                        }
                        {
                            this.state.fave === false ?
                            <div className="rcd-sdv6"  onClick={() => this.onHeartClicked(this.props.host)}><FontAwesomeIcon icon={farHeart}/></div>
                            :
                            <div className="rcd-sdv6alt" onClick={() => this.onHeartClicked(this.props.host)}><FontAwesomeIcon icon={faHeart}/></div>
                        }
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}