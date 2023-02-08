import React from "react";
import PropTypes from "prop-types";

const ChefCard = ({ chefData }) => {
    return (
        <article className="chef">
            <div className="chef__textContent">
                <div className="chef__photo">
                    <img src={chefData.photo} alt="Фотография" />
                </div>
                <div className="chef__nameBlock">
                    <div className="chef__name">{chefData.name}</div>
                    <div className="chef__specialization">
                        {chefData.specialization}
                    </div>
                </div>
            </div>
            <div className="chef__imgContent">
                <img
                    className="chef__bigImg"
                    src={chefData.img1}
                    alt="Фотография"
                />
                <img
                    className="chef__smallImg"
                    src={chefData.img2}
                    alt="Фотография"
                />
                <img
                    className="chef__smallImg"
                    src={chefData.img3}
                    alt="Фотография"
                />
            </div>
        </article>
    );
};

ChefCard.propTypes = {
    chefData: PropTypes.object
};

export default ChefCard;
