import React from 'react';

import NavBar from './NavBar';
import Description from './Description';

export default class Row extends React.Component {
    render() {
        return (
            <div class="row">
                <NavBar/>
                <Description/>
            </div>
        );
    }
}