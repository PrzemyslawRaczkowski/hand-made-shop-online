import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-lg-12">
                    <div class="bs-component">
                        <div class="jumbotron">
                            <h1>{this.props.title}</h1>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
                                attention to
                                featured content or information.</p>
                            <p><a class="btn btn-primary btn-lg">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}