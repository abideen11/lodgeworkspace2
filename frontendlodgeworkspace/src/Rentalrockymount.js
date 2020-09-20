import React from 'react';

export default class Rentalrockymount extends React.Component {
    state = {
        rentalImg1: true
    }
    showRentalImg1 = () => {
        this.setState({
            rentalImg1: true
        })
    }
    notShowRentalImg1 = () => {
        this.setState({
            rentalImg1: false
        })
    }
    render() {
        console.log(this.props.clickedRental)
        return(
            <div className="div-rfm">
                <div className="rfm-div"></div>
                <div className="rfm-div2">
                    <br />
                    <div className="rdv2-div">
                        {
                            this.state.rentalImg1 ?
                            <img src={this.props.clickedRental.rental_img1} alt="plc" />
                            :
                            <img src={this.props.clickedRental.rental_img2} alt="plc" />
                        }
                    </div>
                    <div className="rdv2-div2">
                        <div className="dv2-rfm" onClick={() => this.showRentalImg1()}><img src={this.props.clickedRental.rental_img1} alt="plc" /></div>
                        <div className="dv2-rfm2" onClick={() => this.notShowRentalImg1()}><img src={this.props.clickedRental.rental_img2} alt="plc" /></div>
                    </div>
                    {/* <div className="rdv2-div2"> */}
                        {/* <div className="dv2-rfm"> */}
                            {/* <div className="d2rf-div">Try</div> */}
                            {/* <div className="d2rf-div2">Try</div> */}
                        {/* </div> */}
                    {/* </div> */}
                    {/* <div className="aux">Try</div> */}
                    <h1>Testing</h1>
                    <p>{this.props.clickedRental.rental}</p>
                </div>
                <div className="rfm-div3"></div>
            </div>
        )
    }
}