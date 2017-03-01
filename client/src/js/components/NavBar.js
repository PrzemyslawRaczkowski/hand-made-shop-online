import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="list-group table-of-contents">
                    <Link className="list-group-item" to="/">HOME</Link>
                    <Link className="list-group-item" to="shop">SHOP</Link>
                    <Link className="list-group-item" to="blog">BLOG</Link>
                    <Link className="list-group-item" to="gallery">GALLERY</Link>
                    <Link className="list-group-item" to="about">ABOUT</Link>
                    <Link className="list-group-item" to="contacts">CONTACTS</Link>
                    <Link className="list-group-item" to="faq">FAQ</Link>
                </div>
            </div>
        );
    }
}