import logo from '../Logo.svg';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <Link to="/" className='lead-text'>Home</Link>
                <Link><a className='lead-text' href="#">About</a></Link>
                <Link><a className='lead-text' href="#">Menu</a></Link>
                <Link to="/booking" className='lead-text'>Reservations</Link>
                <Link><a className='lead-text' href="#">Order Online</a></Link>
                <Link><a className='lead-text' href="#">Login</a></Link>
            </ul>
        </nav>
    );
}

export default Nav;