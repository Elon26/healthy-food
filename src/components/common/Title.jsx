import React from "react";
import PropTypes from "prop-types";

const Title = ({ back, front, line }) => {
    return (
        <div className="title">
            <div className="title__back">{back}</div>
            <h2 className="title__front">{front}</h2>
            {line && <div className="title__line"></div>}
        </div>
    );
};

Title.propTypes = {
    back: PropTypes.string,
    front: PropTypes.string,
    line: PropTypes.bool
};

export default Title;
