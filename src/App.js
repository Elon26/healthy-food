import React from "react";
import About from "./components/About";
import Chefs from "./components/Chefs";
import Dishes from "./components/Dishes";
import Feedback from "./components/Feedback";
import MainScreen from "./components/MainScreen";
import NavBar from "./components/NavBar";
import Works from "./components/Works";
import WindowDimensionsProvider from "./hooks/useWindowDimensions";
import Advices from "./components/Advices";
import Footer from "./components/Footer";

// ! Функционал загрузки базы данных в Firebase
// import FirebaseService from "./components/FirebaseService/FirebaseService";

function App() {
    return (
        <div className="App">
            <WindowDimensionsProvider>
                <NavBar />
                <MainScreen />
                {/* <FirebaseService /> */}
                <About />
                <Works />
                <Dishes />
                <Chefs />
                <Advices />
                <Feedback />
                <Footer />
            </WindowDimensionsProvider>
        </div>
    );
}

export default App;
