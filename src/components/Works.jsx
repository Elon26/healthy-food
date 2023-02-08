import React from "react";
import Title from "./common/Title";
import Spoiler from "./Spoiler";

const Works = () => {
    return (
        <section className="works">
            <div className="works__container container">
                <div className="about__title">
                    <Title back="Сервис" front="Как мы работаем" line={true} />
                </div>
                <div className="about__spoiler">
                    <Spoiler />
                </div>
            </div>
        </section>
    );
};

export default Works;
