import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Homepage from './Homepage.js';
import Bookingpage from './Bookingpage.js';
import {Routes, Route} from 'react-router-dom';
import { useState, useReducer } from "react";

function Main() {

    const initializeTimes = () => [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];

    const updateTimes = () => {};

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                path="/booking"
                element={<Bookingpage 
                availableTimes={availableTimes}
                dispatch={dispatch} />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default Main;