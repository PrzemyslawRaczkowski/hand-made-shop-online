import React from 'react';

import NavBar from './NavBar';
import Row from './Row';
import Header from './Header';
import ProductItem from './ProductItem';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row title='Shop'/>
                <div class="row">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
                <div class="row">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        );
    }
}