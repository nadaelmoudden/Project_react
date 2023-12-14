import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
        <div>
            <p className="review__text">
            "The convenience was unparalleled! Placed my order in minutes and had a gourmet meal delivered promptly. A lifesaver on busy evenings!" 
            </p>
            <div className=" slider__content d-flex align-items-center gap-3 ">
            <img src={ava01} alt="avatar" className=" rounded" />
            <h6>Jhon Doe</h6>
            </div>
        </div>
        <div>
            <p className="review__text">
            "Impressed by the ease of ordering! The options were vast, and the delivery was faster than expected. Definitely my go-to for delicious meals at home!"
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
            <img src={ava02} alt="avatar" className=" rounded" />
            <h6>Mitchell Marsh</h6>
            </div>
        </div>
        <div>
            <p className="review__text">
            "The entire process was seamless. From selection to delivery, everything was spot on. The food arrived fresh and tasted phenomenal—a fantastic online ordering experience!" 
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
            <img src={ava03} alt="avatar" className=" rounded" />
            <h6>Steven Crock</h6>
            </div>
        </div>
        </Slider>
    );
};

export default TestimonialSlider;