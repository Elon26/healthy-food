import React from "react";
import { BsWatch, BsGeoAlt, BsPhoneVibrate } from "react-icons/bs";

const Infos = () => {
    return (
        <div className="infos">
            <div className="infos__info">
                <div className="infos__icon">
                    <BsWatch />
                </div>
                <div className="infos__message">Ежедневно с 10 до 19</div>
                <div className="infos__description">Рабочие часы</div>
            </div>
            <div className="infos__info">
                <div className="infos__icon">
                    <BsGeoAlt />
                </div>
                <div className="infos__message">г. Уфа, ул. Хофа, 6</div>
                <div className="infos__description">Адрес</div>
            </div>
            <div className="infos__info">
                <div className="infos__icon">
                    <BsPhoneVibrate />
                </div>
                <div className="infos__message">
                    <a href="tel:88001002424">8(800)100-24-24</a>
                </div>
                <div className="infos__description">Телефон</div>
            </div>
        </div>
    );
};

export default Infos;
