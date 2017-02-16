import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Shop from './pages/Shop'

const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Home}> </Route>
    <Route path="about" name="archives" component={About}></Route>
    <Route path="blog" name="settings" component={Blog}></Route>
    <Route path="contacts" name="settings" component={Contacts}></Route>
    <Route path="faq" name="settings" component={Faq}></Route>
    <Route path="gallery" name="settings" component={Gallery}></Route>
    <Route path="shop" name="settings" component={Shop}></Route>
</Router>, app);