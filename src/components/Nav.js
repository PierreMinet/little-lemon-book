import logo from '../Logo.svg';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a className='section-category' href="#">Home</a></li>
                <li><a className='section-category' href="#">About</a></li>
                <li><a className='section-category' href="#">Menu</a></li>
                <li><a className='section-category' href="#">Reservations</a></li>
                <li><a className='section-category' href="#">Order Online</a></li>
                <li><a className='section-category' href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;