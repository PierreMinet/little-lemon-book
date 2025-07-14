import salad from '../images/greek salad.jpg';
import { Link } from 'react-router-dom';

function Specials() {
    return(
        <>
            <div className='main-div'>
                <h2 style={{color:"#333333"}}>This week's specials!</h2>
                <Link to="/" style={{marginLeft: "auto"}} className='button-normal section-category'>Online Menu</Link>
            </div>
            <div className='main-div'>
                <article>
                    <div className="card">
                        <div className='card-img-container'>
                            <img src={salad} width={350} height={390} alt="Greek salad" />
                        </div>
                        <div className='card-desc'>
                            <h3 className='card-title'>Greek salad</h3>
                            <span className='price'>$12.99</span>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default Specials;