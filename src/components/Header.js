import hero from '../images/hero_image.jpg';

function Header() {
    return (
        <header>
            <div className='main-div'>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="section-category">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button style={{marginTop: 25}} className='button-normal section-category'>Reserve a table</button>
                </article>
                <article className='hero-image'>
                    <img src={hero} width={350} height={390} alt="Hero image" />
                </article>
            </div>
        </header>
    );
}

export default Header;