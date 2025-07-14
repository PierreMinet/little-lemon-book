import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Booking from './Booking.js';

function Bookingpage() {
    return(
        <>
            <Nav />
            <main>
                <Booking />
            </main>
            <Footer />
        </>
    );
}

export default Bookingpage;