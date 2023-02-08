import React from "react";
import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import "../styles/spoiler.scss";

const Spoiler = () => {
    const [activeSpoiler, setActiveSpoiler] = useState(0);

    const toggleSpoiler = (spoilerNumber) => {
        if (activeSpoiler === spoilerNumber) {
            setActiveSpoiler(0);
        } else {
            setActiveSpoiler(spoilerNumber);
        }
    };

    return (
        <div className="spoiler">
            <div
                className={
                    "spoiler__item" + (activeSpoiler === 1 ? " active" : "")
                }
            >
                <h3
                    className="spoiler__titleBlock"
                    onClick={() => toggleSpoiler(1)}
                >
                    <BsFillCaretRightFill
                        className={
                            "spoiler__icon" +
                            (activeSpoiler === 1 ? " active" : "")
                        }
                    />
                    <span className="spoiler__title">Большой выбор блюд</span>
                </h3>
                {activeSpoiler === 1 && (
                    <div className="spoiler__body">
                        Выбирайте продукты из разнообразного еженедельного меню.
                        Вы сможете найти блюда без глютена или молочных
                        продуктов, с низким содержанием углеводов и овощей.
                    </div>
                )}
            </div>
            <div
                className={
                    "spoiler__item" + (activeSpoiler === 2 ? " active" : "")
                }
            >
                <h3
                    className="spoiler__titleBlock"
                    onClick={() => toggleSpoiler(2)}
                >
                    <BsFillCaretRightFill
                        className={
                            "spoiler__icon" +
                            (activeSpoiler === 2 ? " active" : "")
                        }
                    />
                    <span className="spoiler__title">Всё готово заранее</span>
                </h3>
                {activeSpoiler === 2 && (
                    <div className="spoiler__body">
                        Наша команда поваров выполняет всю подготовительную
                        работу - больше не нужно нарезать, измерять или мыть
                        посуду в раковине!
                    </div>
                )}
            </div>
            <div
                className={
                    "spoiler__item" + (activeSpoiler === 3 ? " active" : "")
                }
            >
                <h3
                    className="spoiler__titleBlock"
                    onClick={() => toggleSpoiler(3)}
                >
                    <BsFillCaretRightFill
                        className={
                            "spoiler__icon" +
                            (activeSpoiler === 3 ? " active" : "")
                        }
                    />
                    <span className="spoiler__title">Быстрая доставка</span>
                </h3>
                {activeSpoiler === 3 && (
                    <div className="spoiler__body">
                        Приготовленные за 15 минут обеденные наборы прибудут к
                        вашему порогу в мини-холодильнике.
                    </div>
                )}
            </div>
            <div
                className={
                    "spoiler__item" + (activeSpoiler === 4 ? " active" : "")
                }
            >
                <h3
                    className="spoiler__titleBlock"
                    onClick={() => toggleSpoiler(4)}
                >
                    <BsFillCaretRightFill
                        className={
                            "spoiler__icon" +
                            (activeSpoiler === 4 ? " active" : "")
                        }
                    />
                    <span className="spoiler__title">
                        Больше времени на семью
                    </span>
                </h3>
                {activeSpoiler === 4 && (
                    <div className="spoiler__body">
                        Мы готовим и доставляем блюда очень быстро, так что у
                        вас будет больше времени, чтобы расслабиться и побыть с
                        семьей.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Spoiler;
