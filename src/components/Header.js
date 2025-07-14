import hero from '../images/hero_image.jpg';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='main-div'>
                <article>
                    <h1>Little Lemon</h1>
                    <h3 style={{color:"#EDEFEE"}}>Chicago</h3>
                    <p className="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" style={{marginTop: 25}} className='button-normal section-category'>Reserve a table</Link>
                </article>
                <article className='hero-image'>
                    <img src={hero} width={350} height={390} alt="Hero image" />
                </article>
            </div>
        </header>
    );
}

export default Header;