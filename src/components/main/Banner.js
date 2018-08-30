import React, { Component } from 'react';
import Slider from "react-slick";

class Banner extends Component {
    render () {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            arrows: false
        };

        return (
            <div className="slider">
                <Slider {...settings}>
                    <div className="slider-item">
                        <div className="banner"></div>
                        <div className="slider-title">
                            <span className="title-bar">Nossa especialidade: experiência de compra.</span>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="banner"></div>
                        <div className="slider-title">
                            <span className="title-bar">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="banner"></div>
                        <div className="slider-title">
                            <span className="title-bar">consectetur adipiscing</span>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="banner"></div>
                        <div className="slider-title">
                            <span className="title-bar">sed do eiusmod tempor incididunt ut labore.</span>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Banner;