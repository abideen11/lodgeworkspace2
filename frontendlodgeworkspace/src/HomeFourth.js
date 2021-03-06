import React from 'react';

import vacationimg2 from './top-attraction-rome-colosseum-img-cropped.jpg'

export default class HomeFourth extends React.Component {
    render() {
        return(
            <div className="div-hfrt">
                <div className="hfrt-div"></div>
                <div className="hfrt-div2">
                    <div className="dv2-hfrt">
                        <div className="hfrt-d2d">
                            <p>
                                The world has so many places that are rich with history and
                                culture. Immerse yourself and gain a new understanding
                                and insight. Although a picture captures it, it is not
                                as exhilarating as being in person. What are you waiting
                                for?
                            </p>
                        </div>
                    </div>
                    <div className="dv22-hfrt">
                        <div className="hfrt-d2d2"><img src={vacationimg2} alt="plc" /></div>
                    </div>
                </div>
                <div className="hfrt-div3"></div>
            </div>
        )
    }
}