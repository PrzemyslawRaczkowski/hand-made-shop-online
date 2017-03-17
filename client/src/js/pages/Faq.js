import React from 'react';

import Header from '../components/Header';
import Row from '../components/Row';
import AddingProductForm from '../components/AddingProductForm';

export default class Faq extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row title='Faq'/>
                <AddingProductForm/>
            </div>
        );
    }
}