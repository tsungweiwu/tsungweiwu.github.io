import React, {Component} from 'react';
import {BiError} from 'react-icons/bi';

export default class Resume extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    height: '50vh',
                    marginTop: '10%',
                    textAlign: 'center',
                }}>
                <BiError
                    style={{width: '9em', height: '9em', marginBottom: '2em'}}
                />
                <h1 style={{fontSize: '4.5em'}}>404</h1>
                <h1>Page Not Found</h1>
            </div>
        );
    }
}
