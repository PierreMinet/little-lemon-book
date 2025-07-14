import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Homepage from './Homepage.js';
import Bookingpage from './Bookingpage.js';
import {Routes, Route} from 'react-router-dom';

function Main() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<Bookingpage />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default Main;