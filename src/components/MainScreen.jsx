import React from "react";
import Infos from "./common/Infos";

const MainScreen = () => {
    return (
        <section className="mainScreen" id="head">
            <div className="mainScreen__bg">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Fbg.jpg?alt=media&token=450475c6-6bb9-4f45-8fbc-4653a11effc9"
                    alt="Ужин"
                />
            </div>
            <div className="mainScreen__content">
                <div className="mainScreen__container container">
                    <h1 className="mainScreen__header">
                        Доставим <b>Любимые Блюда Горячими и Свежими</b>
                    </h1>
                    <div className="mainScreen__text">
                        Повара HEALTHY SWITCHER заранее делают всю
                        подготовительную работу: чистят, режут и маринуют,
                        поэтому вы можете заказать свежий домашний ужин всего за{" "}
                        <b>15 минут.</b>
                    </div>
                    <a
                        className="mainScreen__button button"
                        href="tel:88001002424"
                    >
                        Заказать
                    </a>
                    <div className="mainScreen__infos">
                        <Infos />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;
