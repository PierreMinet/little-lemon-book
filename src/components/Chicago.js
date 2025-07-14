const mainColor = "#333333";

function Chicago() {
    return (
        <>
            <div className='main-div'>
                <article>
                    <h2 style={{color:mainColor}}>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p className="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </article>
                {/* <article>
                    <div className="card">
                        <div className='card-img-container'>
                            <img src={salad} width={350} height={390} alt="Greek salad" />
                        </div>
                        <div className='card-desc'>
                            <h3 className='card-title'>Greek salad</h3>
                            <span className='price'>$12.99</span>
                        </div>
                    </div>
                </article> */}
            </div>
        </>
    );
}

export default Chicago;