import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="jumbotron">
                        <h1>Jumbotron</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                            featured content or information.</p>
                        <p><a class="btn btn-primary btn-lg">Learn more</a></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="bs-component">
                            <div class="list-group">
                                <a href="#" class="list-group-item">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.
                                        Maecenas
                                        sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="#" class="list-group-item">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.
                                        Maecenas
                                        sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="#" class="list-group-item">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.
                                        Maecenas
                                        sed diam eget risus varius blandit.</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="bs-component">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
                                <li><a href="#profile" data-toggle="tab">Profile</a></li>
                                <li class="disabled"><a>Disabled</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        Dropdown <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div id="myTabContent" class="tab-content">
                                <div class="tab-pane fade active in" id="home">
                                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                        stumptown
                                        aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles
                                        vegan
                                        helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                                        sweater eu
                                        banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                        iphone.
                                        Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                </div>
                                <div class="tab-pane fade" id="profile">
                                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
                                        squid.
                                        Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
                                        anderson
                                        artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                                        commodo
                                        enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
                                        nostrud
                                        organic, assumenda labore aesthetic magna delectus mollit.</p>
                                </div>
                                <div class="tab-pane fade" id="dropdown1">
                                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
                                        mcsweeney's
                                        organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag
                                        gentrify
                                        pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
                                        banksy
                                        hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
                                        pitchfork.</p>
                                </div>
                                <div class="tab-pane fade" id="dropdown2">
                                    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before
                                        they
                                        sold
                                        out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack
                                        portland seitan DIY, art party locavore wolf cliche high life echo park Austin.
                                        Cred
                                        vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS
                                        viral
                                        locavore cosby sweater.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="bs-component">
                            <h2>Emphasis classes</h2>
                            <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                            <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                            <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <h2 id="type-blockquotes">Blockquotes</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="bs-component">
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="bs-component">
                            <blockquote class="blockquote-reverse">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
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