import Nav from './Nav.js';
import Footer from './Footer.js';
import Homepage from './Homepage.js';
import Bookingpage from './Bookingpage.js';
import {Routes, Route} from 'react-router-dom';
import { useReducer } from "react";

function Main() {

    const initializeTimes = () => [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                const date = action.payload;
                const available = [
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00",
                ];
                return available;
            default:
                return state;
        }
        };

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