import React from "react";
import Infos from "./common/Infos";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container container">
                    <div className="footer__infos">
                        <Infos />
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container container">
                    <div className="footer__copyrights">
                        <a href="#head" className="footer__logo">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Healthy%20Food%2Flogo.png?alt=media&token=d94803b9-96db-4b9e-b522-60833f3a02ad"
                                alt="Лого"
                            />
                        </a>
                    </div>
                    <div className="footer__rights">
                        © Designed by Yellow Snow. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
