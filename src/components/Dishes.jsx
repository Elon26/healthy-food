import React, { useEffect, useState } from "react";
import Title from "./common/Title";
import DishCard from "./DishCard";
import axios from "axios";

const Dishes = () => {
    const [dishesDB, setDishesDB] = useState([]);

    const getDB = async () => {
        try {
            const response = await axios.get(
                `https://porfolio-f48be-default-rtdb.firebaseio.com/dish.json`
            );
            setDishesDB(Object.values(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDB();
    }, []);

    return (
        <section className="dishes" id="dishes">
            <div className="dishes__container container">
                <div className="dishes__title">
                    <Title back="Кухня" front="Блюда дня" line={true} />
                </div>
                <div className="dishes__cards">
                    {dishesDB.length > 0 &&
                        dishesDB.map((dish) => (
                            <DishCard key={dish.id} dish={dish} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Dishes;
