import React from 'react';
import HomeFirst from './HomeFirst';
import HomeFourth from './HomeFourth';
import HomeSecond from './HomeSecond';
import HomeThird from './HomeThird';

export default class Home extends React.Component {
    render() {
        return(
            <div className="div-hom">
                {<HomeFirst />}
                {<HomeThird />}
                {<HomeFourth />}
                {<HomeSecond />}
            </div>
        )
    }
}