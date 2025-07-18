import logo from '../Logo.svg';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <Link to="/" aria-label="Home page" className='lead-text'>Home</Link>
                <Link aria-label="About" className='lead-text'>About</Link>
                <Link aria-label="Menu" className='lead-text'>Menu</Link>
                <Link aria-label="Booking page" to="/booking" className='lead-text'>Reservations</Link>
                <Link aria-label="Order online" className='lead-text'>Order Online</Link>
                <Link aria-label="Login" className='lead-text'>Login</Link>
            </ul>
        </nav>
    );
}

export default Nav;