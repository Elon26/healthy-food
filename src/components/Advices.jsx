import React from "react";
import Title from "./common/Title";
import { BsEyeFill, BsChatLeftTextFill } from "react-icons/bs";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Advices = () => {
    const { windowWidth } = useWindowDimensions();

    return (
        <section className="advices">
            <div className="advices__container container">
                <div className="advices__title">
                    <Title
                        back="Советы"
                        front="Советы по здоровому питанию"
                        line={true}
                    />
                </div>
                <div className="advices__body">
                    {windowWidth > 991.98 && (
                        <div className="advices__col">
                            <div className="advices__bigImem">
                                <div className="advices__bg">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Frecipes-1.jpg?alt=media&token=72e29aa4-7e7d-413c-b057-645962a63da4"
                                        alt="Фотография"
                                    />
                                </div>
                                <div className="advices__content">
                                    <div className="advices__sticker">
                                        Завтрак
                                    </div>
                                    <div className="advices__date">
                                        18 января 2023 г.
                                    </div>
                                    <div className="advices__advice advices__advice_big">
                                        Пepeд зaвтpaкoм следует выпивaть 200 мл
                                        чиcтoй вoды для зaпycкa oбмeнных
                                        пpoцeccoв в opгaнизмe и для пpaвильнoй
                                        paбoты жeлyдoчнo-кишeчнoгo тpaктa. Лучше
                                        не есть на завтрак жареную пищу.
                                    </div>
                                    <div className="advices__author">
                                        Станислав Уваров
                                    </div>
                                    <div className="advices__icons">
                                        <div className="advices__iconBlock">
                                            <BsEyeFill />
                                            <span>144</span>
                                        </div>
                                        <div className="advices__iconBlock">
                                            <BsChatLeftTextFill />
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="advices__col">
                        {windowWidth <= 991.98 && (
                            <div className="advices__smallImem">
                                <div className="advices__bg">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Frecipes-1.jpg?alt=media&token=72e29aa4-7e7d-413c-b057-645962a63da4" />
                                </div>
                                <div className="advices__content">
                                    <div className="advices__advice advices__advice_small">
                                        Пepeд зaвтpaкoм следует выпивaть 200 мл
                                        чиcтoй вoды для зaпycкa oбмeнных
                                        пpoцeccoв в opгaнизмe и для пpaвильнoй
                                        paбoты жeлyдoчнo-кишeчнoгo тpaктa. Лучше
                                        не есть на завтрак жареную пищу.
                                    </div>
                                    <div className="advices__footer">
                                        <div className="advices__leftFooter">
                                            <div className="advices__sticker">
                                                Завтрак
                                            </div>
                                            <div className="advices__date">
                                                18 января 2023 г.
                                            </div>
                                        </div>
                                        <div className="advices__icons">
                                            <div className="advices__iconBlock">
                                                <BsEyeFill />
                                                <span>218</span>
                                            </div>
                                            <div className="advices__iconBlock">
                                                <BsChatLeftTextFill />
                                                <span>7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="advices__smallImem">
                            <div className="advices__content">
                                <div className="advices__advice advices__advice_small">
                                    На обед можно есть всё, что не запрещено по
                                    принципам здорового питания. Чем более
                                    разнообразные блюда будут включены в рацион,
                                    тем больше пользы будет организму. С
                                    поправкой на суточную норму калорий.
                                </div>
                                <div className="advices__footer">
                                    <div className="advices__leftFooter">
                                        <div className="advices__sticker">
                                            Обед
                                        </div>
                                        <div className="advices__date">
                                            30 ноября 2022 г.
                                        </div>
                                    </div>
                                    <div className="advices__icons">
                                        <div className="advices__iconBlock">
                                            <BsEyeFill />
                                            <span>177</span>
                                        </div>
                                        <div className="advices__iconBlock">
                                            <BsChatLeftTextFill />
                                            <span>5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="advices__smallImem">
                            <div className="advices__bg">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Frecipes-2.jpg?alt=media&token=d19171b9-9287-49ab-91d8-d8b972f39e66"
                                    alt="Фотография"
                                />
                            </div>
                            <div className="advices__content">
                                <div className="advices__advice advices__advice_small">
                                    Ecли oбeд был кaлopийным, тoгдa yжин следует
                                    cдeлaть диeтичecким, кoмпeнcиpyя пepeeдaниe.
                                    Лучшие продукты на ужин — это мясо или
                                    птица, рыба, яйца и творог.
                                </div>
                                <div className="advices__footer">
                                    <div className="advices__leftFooter">
                                        <div className="advices__sticker">
                                            Ужин
                                        </div>
                                        <div className="advices__date">
                                            07 октября 2022 г.
                                        </div>
                                    </div>
                                    <div className="advices__icons">
                                        <div className="advices__iconBlock">
                                            <BsEyeFill />
                                            <span>218</span>
                                        </div>
                                        <div className="advices__iconBlock">
                                            <BsChatLeftTextFill />
                                            <span>7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="advices__smallImem">
                            <div className="advices__content">
                                <div className="advices__advice advices__advice_small">
                                    Топ-9 самых полезных десертов для здоровья:
                                    фрукты, ягоды, смузи, мёд, натуральный
                                    йогурт, чёрный шоколад, мармелад, халва и
                                    мюсли.
                                </div>
                                <div className="advices__footer">
                                    <div className="advices__leftFooter">
                                        <div className="advices__sticker">
                                            Десерт
                                        </div>
                                        <div className="advices__date">
                                            12 сентября 2022 г.
                                        </div>
                                    </div>
                                    <div className="advices__icons">
                                        <div className="advices__iconBlock">
                                            <BsEyeFill />
                                            <span>275</span>
                                        </div>
                                        <div className="advices__iconBlock">
                                            <BsChatLeftTextFill />
                                            <span>12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advices;
