import React from 'react';

import NavBar from './NavBar';
import Description from './Description';
import ProductItem from './ProductItem';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <NavBar/>
                    <Description title={this.props.title}/>
                </div>
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