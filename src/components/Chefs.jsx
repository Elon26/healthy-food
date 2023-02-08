import React from "react";
import ChefCard from "./ChefCard";
import Title from "./common/Title";
import chefsDB from "./dataBase/chefs.json";

const Chefs = () => {
    return (
        <section className="chefs" id="chefs">
            <div className="chefs__container container">
                <div className="chefs__title">
                    <Title back="Шефы" front="Наши Шеф-повара" line={true} />
                </div>
                <div className="chefs__row">
                    {chefsDB.map((chefData) => (
                        <ChefCard key={chefData.id} chefData={chefData} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Chefs;
