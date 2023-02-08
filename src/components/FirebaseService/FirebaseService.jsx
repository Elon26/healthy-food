import React from "react";
import useMockData from "./mockData";

const FirebaseService = () => {
    const { error, initialize, progress, status } = useMockData();

    const handleClick = () => {
        initialize();
    };

    return (
        <div className="container">
            <h3>Загрузка данных в Firebase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Загрузить
            </button>
        </div>
    );
};

export default FirebaseService;
