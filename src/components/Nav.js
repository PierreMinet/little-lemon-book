import logo from '../Logo.svg';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <Link to="/" className='lead-text'>Home</Link>
                <Link className='lead-text'>About</Link>
                <Link className='lead-text'>Menu</Link>
                <Link to="/booking" className='lead-text'>Reservations</Link>
                <Link className='lead-text'>Order Online</Link>
                <Link className='lead-text'>Login</Link>
            </ul>
        </nav>
    );
}

export default Nav;