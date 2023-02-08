import axios from "axios";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";

const DishCard = ({ dish }) => {
    const storageName = "dishesVotesStorage";
    const [rating, setRating] = useState(dish.rate);
    const [votes, setVotes] = useState(dish.votes);

    const sendDataToDB = async (data) => {
        try {
            await axios.patch(
                `https://porfolio-f48be-default-rtdb.firebaseio.com/dish/${data.id}.json`,
                data
            );
        } catch (error) {
            console.log(error);
        }
    };

    function handleChange(newRatingValue) {
        const currentVotes =
            JSON.parse(localStorage.getItem(storageName)) || [];
        const currentVote = currentVotes.find((vote) => vote.id === dish.id);

        if (currentVote) {
            if (currentVote.lastVote === newRatingValue) return;

            const newRatingLarge =
                (currentVote.rate * currentVote.votes -
                    currentVote.lastVote +
                    newRatingValue) /
                votes;
            const newRating = Math.round(newRatingLarge * 10) / 10;
            setRating(newRating);
            const changedVotes = currentVotes.map((vote) => {
                if (vote.id === dish.id) {
                    return {
                        ...vote,
                        rate: newRating,
                        lastVote: newRatingValue
                    };
                }
                return vote;
            });
            localStorage.setItem(storageName, JSON.stringify(changedVotes));
            const newRateObjForDB = {
                id: dish.id,
                rate: newRating
            };
            sendDataToDB(newRateObjForDB);
        } else {
            const newRatingLarge =
                (rating * votes + newRatingValue) / (votes + 1);
            const newRating = Math.round(newRatingLarge * 10) / 10;
            setVotes((prevState) => ++prevState);
            setRating(newRating);
            const newRateObjForLS = {
                id: dish.id,
                rate: newRating,
                votes: votes + 1,
                lastVote: newRatingValue
            };
            currentVotes.push(newRateObjForLS);
            localStorage.setItem(storageName, JSON.stringify(currentVotes));
            const newRateObjForDB = {
                id: dish.id,
                rate: newRating,
                votes: votes + 1
            };
            sendDataToDB(newRateObjForDB);
        }
    }

    return (
        <article className="dishCard">
            <div className="dishCard__body">
                <img className="dishCard__img" src={dish.img} alt={dish.name} />
                <div className="dishCard__content">
                    <div className="dishCard__name">{dish.name}</div>
                    <div className="dishCard__info">{dish.info}</div>
                    <div className="dishCard__priceBlock">
                        <span className="dishCard__price">{dish.price} ₽</span>
                        <span className="dishCard__weight">
                            {" "}
                            / {dish.weight} гр.
                        </span>
                    </div>
                    <div className="dishCard__bottomBlock">
                        <div className="dishCard__rateBlock">
                            <StarRatings
                                rating={rating}
                                starDimension="26px"
                                starSpacing="2px"
                                starEmptyColor="#4D4D4D"
                                starRatedColor="#F9AD3D"
                                starHoverColor="#F9AD3D"
                                changeRating={handleChange}
                                numberOfStars={5}
                                name="rating"
                            />
                            <div className="dishCard__votes">{votes}</div>
                        </div>
                        <a
                            className="dishCard__button button"
                            href="tel:88001002424"
                        >
                            Заказать
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

DishCard.propTypes = {
    dish: PropTypes.object.isRequired
};

export default DishCard;
