import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="col-lg-3 col-md-3 col-sm-4">
                <div class="list-group table-of-contents">
                    <a class="list-group-item" href="#/">HOME</a>
                    <a class="list-group-item" href="#/shop">SHOP</a>
                    <a class="list-group-item" href="#/blog">BLOG</a>
                    <a class="list-group-item" href="#/gallery">GALLERY</a>
                    <a class="list-group-item" href="#/about">ABOUT</a>
                    <a class="list-group-item" href="#/contacts">CONTACTS</a>
                    <a class="list-group-item" href="#/faq">FAQ</a>
                </div>
            </div>
        );
    }
}