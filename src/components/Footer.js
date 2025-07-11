import logo from '../Logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div>
                <h4>Navigation</h4>
                <ul>
                    <Link to="/">Home</Link>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <Link to="/booking">Reservations</Link>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;