import axios from "axios";
import { useEffect, useState } from "react";
import dishes from "../dataBase/dishesDB.json";

const useMockData = () => {
    const statusConst = {
        idle: "Not Started",
        pending: "In Process",
        succesed: "Ready",
        error: "Error Occured"
    };

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConst.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summCount = dishes.length;

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConst.idle) {
            setStatus(statusConst.pending);
        }

        const newProgress = Math.floor((count / summCount) * 100);
        if (newProgress > progress) {
            setProgress(() => newProgress);
        }

        if (newProgress === 100) {
            setStatus(statusConst.succesed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const dish of dishes) {
                await axios.put(
                    `https://porfolio-f48be-default-rtdb.firebaseio.com/dish/${dish.id}.json`,
                    dish
                );
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConst.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
