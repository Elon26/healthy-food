import React from "react";
import PropTypes from "prop-types";

const FeedbackItem = ({ feedbackItem }) => {
    return (
        <article className="feedbackItem">
            <div className="feedbackItem__outer">
                <div className="feedbackItem__date">{feedbackItem.date}</div>
                <div className="feedbackItem__text">{feedbackItem.text}</div>
                <div className="feedbackItem__name">{feedbackItem.name}</div>
            </div>
        </article>
    );
};

FeedbackItem.propTypes = {
    feedbackItem: PropTypes.object
};

export default FeedbackItem;
