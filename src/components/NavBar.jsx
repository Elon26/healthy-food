import React from "react";

const NavBar = () => {
    return (
        <header className="navBar">
            <div className="navBar__container container">
                <nav className="navBar__content">
                    <a href="#head" className="navBar__logo">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Flogo.png?alt=media&token=d94803b9-96db-4b9e-b522-60833f3a02ad"
                            alt="Лого"
                        />
                    </a>
                    <ul className="navBar__menu">
                        <li>
                            <a href="#head">Главная</a>
                        </li>
                        <li>
                            <a href="#dishes">Кухня</a>
                        </li>
                        <li>
                            <a href="#chefs">Команда</a>
                        </li>
                        <li>
                            <a href="#feedback">Отзывы</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
