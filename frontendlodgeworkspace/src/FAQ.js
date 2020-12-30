import React from 'react';

export default class FAQ extends React.Component {
    render() {
        return(
            <div className="div-faq">
                <div className="faq-div"></div>
                <div className="faq-div2">
                    <br/>
                    <h1>Frequently Asked Questions</h1>
                    <br/>
                    <br/>
                    <br/>
                    <h3>What is the average rate for 1 night stay?</h3>
                    <p>
                        The rate depends but they are always lower than
                        the average rate of what the hotels charge in the
                        city.
                    </p>
                    <h3>What is the commission fee?</h3>
                    <p>15%</p>
                    <h3>What if I cancel a booking?</h3>
                    <p>
                        That's not a problem, if you did not check into 
                        the booking at the supposed time within 30 days. 
                        We will offer a refund
                    </p>
                </div>
                <div className="faq-div3"></div>
            </div>
        )
    }
}