import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import promiseMiddleware from 'redux-promise';

const app = document.getElementById('app');

const store = createStore( reducer, {}, applyMiddleware( promiseMiddleware ) );

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="about" name="archives" component={About}/>
            <Route path="blog" name="settings" component={Blog}/>
            <Route path="contacts" name="settings" component={Contacts}/>
            <Route path="faq" name="settings" component={Faq}/>
            <Route path="gallery" name="settings" component={Gallery}/>
            <Route path="shop" name="settings" component={Shop}/>
        </Router>
    </Provider>
, app);