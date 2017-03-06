import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="jumbotron">
                        <h1>20% sale!</h1>
                        <p>20% sale for all products till end of this month!.</p>
                        <p><a class="btn btn-primary btn-lg">Check</a></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <h2 id="type-blockquotes">Opinions</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="bs-component">
                            <blockquote>
                                <p>Great handmade blunket! Recommend that shop.</p>
                                <small><cite title="Source Title">arthur1988</cite></small>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="bs-component">
                            <blockquote class="blockquote-reverse">
                                <p>Value for money!</p>
                                <small><cite title="Source Title">littleMonster</cite></small>
                            </blockquote>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <footer>
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="list-unstyled">
                                    <li class="pull-right"><a href="#top">Back to top</a></li>
                                </ul>
                                <p>Made by Raczkowski Przemyslaw</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        );
    }
}