import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="col-lg-3 col-md-3 col-sm-4">
                <div class="list-group table-of-contents">
                    <a class="list-group-item">HOME</a>
                    <a class="list-group-item">SHOP</a>
                    <a class="list-group-item">BLOG</a>
                    <a class="list-group-item">GALLERY</a>
                    <a class="list-group-item">ABOUT</a>
                    <a class="list-group-item">CONTACTS</a>
                    <a class="list-group-item">FAQ</a>
                </div>
            </div>
        );
    }
}