import React from 'react';

import Slider from '../../../../node_modules/react-slick';

export default class SlideShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        };
        return (
            <div class="slide-show">
                <Slider {...settings}>
                    <div><img src='../../../public/img/logo.png'/></div>
                    <div><img src='../../../public/img/img1.jpg'/></div>
                    <div><img src='../../../public/img/img2.jpg'/></div>
                    <div><img src='../../../public/img/img3.jpg'/></div>

                </Slider>
            </div>
        );
    }
}