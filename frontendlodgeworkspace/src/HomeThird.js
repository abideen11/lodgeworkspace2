import React from 'react';

import vacationimg1 from './50CheapTropicalVacationstoTakeThisYearimg1cropped1.jpg'

export default class HomeThird extends React.Component {
    render() {
        return(
            <div className="div-htrd">
                <div className="htrd-div"></div>
                <div className="htrd-div2">
                    <div className="dv2-htrd">
                        <div className="htrd-d2d"><img src={vacationimg1} alt="plc" /></div>
                    </div>
                    <div className="dv22-htrd">
                        <div className="htrd-d2d2">
                            <p>
                                Boogie down to a great beach and enjoy the sunset.
                                Let all your worries escape your thoughts and mind.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="htrd-div3"></div>
            </div>
        )
    }
}