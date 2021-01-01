import React from 'react';

export default class CustomerServicePage extends React.Component {
    state = {
        supportOptions: [
            {i: 1, topic: "Check FAQ page", detail: "Please check the FAQ page to see if your questions can be answered there."},
            {i: 2, topic: "Phone Number", detail: "888-888-8888"},
            {i: 3, topic: "Email", detail: "flathoppersupport@genericwebsite.com"}
        ],
        displayDetail: null
    }
    showDetail = (o) => {
        this.setState({displayDetail: this.state.supportOptions.filter(i => i.i === o)})
    }
    render() {
        console.log(this.state.displayDetail)
        // console.log(this.state.displayDetail.detail)
        return(
            <div className="div-csrv">
                <div className="csrv-div"></div>
                <div className="csrv-div2">
                    <br />
                    <h1>Customer Support</h1>
                    <div className="csrv-dv">
                        <p onClick={() => this.showDetail(1)}>{this.state.supportOptions[0].topic}</p>
                        <p onClick={() => this.showDetail(2)}>{this.state.supportOptions[1].topic}</p>
                        <p onClick={() => this.showDetail(3)}>{this.state.supportOptions[2].topic}</p>
                    </div>
                    <div className="csrv-dv2">
                        {
                            this.state.displayDetail === null ?
                            <p>{this.state.supportOptions[0].detail} </p>
                            :
                            <p>{this.state.displayDetail[0].detail} </p>
                        }
                        {/* <p>{this.state.displayDetail.detail} </p> */}
                    </div>
                </div>
                <div className="csrv-div3"></div>
            </div>
        )
    }
}