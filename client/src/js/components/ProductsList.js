import React from 'react';

import NavBar from './NavBar';
import Row from './Row';
import Header from './Header';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import ProductsNavBar from './ProductsNavBar';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Row title='Shop'/>
                <ProductsNavBar/>
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
                <Pagination/>
            </div>
        );
    }
}