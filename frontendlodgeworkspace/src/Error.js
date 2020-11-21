import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default class Error extends React.Component {
    render() {
        return(
            <div className="div-err">
                <h1>404</h1>
                <h1>Page Not Found</h1>
                <div className="err-dv"><FontAwesomeIcon icon={faExclamationTriangle} size='10x' /></div>
            </div>
        )
    }
}