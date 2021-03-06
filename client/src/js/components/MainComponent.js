import React from 'react';

import Header from './Header';
import Row from './Row';
import Footer from './Footer';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row title={this.props.title}/>
                <Footer/>
            </div>
        );
    }
}