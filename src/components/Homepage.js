import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Specials from './Specials.js';
import Chicago from './Chicago.js';
import CustomerSay from './CustomersSay.js';

function Homepage() {
    return (
        <>
            <Nav />
            <Header />
            <main>
                <Specials />
                <CustomerSay />
                <Chicago />
            </main>
            <Footer />
        </>
    );
}

export default Homepage;