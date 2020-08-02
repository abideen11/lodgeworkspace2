import React from 'react';
import HomeFirst from './HomeFirst';

export default class Home extends React.Component {
    render() {
        return(
            <div className="div-hom">
                {<HomeFirst />}
            </div>
        )
    }
}