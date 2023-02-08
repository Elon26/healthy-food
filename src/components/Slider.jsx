import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

function PrevArrow({ className, style, onClick }) {
    return (
        <BsArrowLeftCircleFill
            className={className + " slider__arrow slider__arrow_prev"}
            style={style}
            onClick={onClick}
        />
    );
}

function NextArrow({ className, style, onClick }) {
    return (
        <BsArrowRightCircleFill
            className={className + " slider__arrow slider__arrow_next"}
            style={style}
            onClick={onClick}
        />
    );
}

const Slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const slides = [
        {
            img_1: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish5.jpg?alt=media&token=7d3d281c-d7a2-4b15-adad-46b92061a86a",
            img_2: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish4.jpg?alt=media&token=faedaafb-783b-4c0e-bbf1-af1c91b35dee",
            text: "В вашем недельном меню должны быть овощи и фрукты, крупы, мясо, рыба, яйца, молочные и кисломолочные продукты."
        },
        {
            img_1: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish1.jpg?alt=media&token=e4aadc96-45d3-4dc7-ad44-be6c2a1c97b6",
            img_2: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish6.jpg?alt=media&token=96a0e024-b803-4d63-a78a-0b394d641fc1",
            text: "Отдавайте предпочтение медленным углеводам: гречке, рису, цельнозерновому хлебу и макаронам из твердых сортов пшеницы. За счет поступления таких углеводов организм дольше остается сытым."
        },
        {
            img_1: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish3.jpg?alt=media&token=f7cf533a-6a9d-47c4-8a54-dd2a59c79951",
            img_2: "https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fdish2.jpg?alt=media&token=41e09611-d049-433f-9a4d-dac38f77eb2d",
            text: "Между последним приемом пищи и отходом ко сну должен выдерживаться минимум двухчасовой промежуток времени. Ночью метаболизм замедляется, пища переваривается хуже."
        }
    ];

    return (
        <div className="slider">
            <SlickSlider {...settings}>
                {slides.map((slide) => (
                    <div key={Date.now()}>
                        <div className="slider__text">
                            <h3>{slide.text}</h3>
                        </div>
                        <div className="slider__images">
                            <img
                                className="slider__image"
                                src={slide.img_1}
                                alt="Блюдо"
                            />
                            <img
                                className="slider__image"
                                src={slide.img_2}
                                alt="Блюдо"
                            />
                        </div>
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

PrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

NextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default Slider;
