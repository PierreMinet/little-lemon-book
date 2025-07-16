import Nav from './Nav.js';
import Footer from './Footer.js';
import Homepage from './Homepage.js';
import Bookingpage from './Bookingpage.js';
import {Routes, Route} from 'react-router-dom';
import { useReducer, useEffect } from "react";
import ConfirmedBooking from './ConfirmedBooking.js';

const date = new Date();

export let initializeTimes = () => [];

export const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                const newDate = action.payload;
                console.log(`Updated date : ${newDate}`)
                const available = fetchAPI(date);
                console.log(`Updated times : ${available}`)
                return available;
            default:
                return state;
        }
        };

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    useEffect(() => {
        console.log("Started useEffect")
        const loadAPI = async () => {
            console.log("Async function running");
            console.log(date);
            initializeTimes = fetchAPI(date);
            console.log(fetchAPI(date));
            console.log(initializeTimes);
        }
        loadAPI();
    },[]);

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
                <Route 
                path="/confirm" 
                element={<ConfirmedBooking />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default Main;