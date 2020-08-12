import React from 'react';
import HomeFirst from './HomeFirst';
import HomeSecond from './HomeSecond';

export default class Home extends React.Component {
    render() {
        return(
            <div className="div-hom">
                {<HomeFirst />}
                {<HomeSecond />}
            </div>
        )
    }
}