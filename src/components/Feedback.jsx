import React from "react";
import Title from "./common/Title";
import feedbackDB from "./dataBase/feedback.json";
import FeedbackItem from "./FeedbackItem";

const Feedback = () => {
    return (
        <section className="feedback" id="feedback">
            <div className="feedback__container container">
                <div className="feedback__title">
                    <Title
                        back="Отзывы"
                        front="Отзывы наших клиентов"
                        line={true}
                    />
                </div>
                <div className="feedback__body">
                    {feedbackDB.map((feedbackItem) => (
                        <FeedbackItem
                            key={feedbackItem.id}
                            feedbackItem={feedbackItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
