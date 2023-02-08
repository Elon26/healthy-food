import React from "react";
import Title from "./common/Title";
import Slider from "./Slider";

const About = () => {
    return (
        <section className="about">
            <div className="about__container container">
                <div className="about__title">
                    <Title
                        back="Основы"
                        front="Основы здорового питания"
                        line={false}
                    />
                </div>
                <div className="about__slider">
                    <Slider />
                </div>
            </div>
        </section>
    );
};

export default About;
