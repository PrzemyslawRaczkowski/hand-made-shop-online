import React from 'react';

import Header from './Header';
import Row from './Row';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row/>
            </div>
        );
    }
}