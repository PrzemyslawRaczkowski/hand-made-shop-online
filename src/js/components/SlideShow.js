import React from 'react';

var Slider = require('react-slick');

export default class SlideShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div class="slide-show">
                <Slider {...settings}>
                    <div><img src='../../img/img1.png'/></div>
                </Slider>
            </div>
        );
    }
}