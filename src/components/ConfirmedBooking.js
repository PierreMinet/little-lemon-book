import {Link} from 'react-router-dom';

function ConfirmedBooking() {
    return (
        <article>
            <div className='main-div' style={{textAlign:"center"}}>
                <h2 style={{color:"#333333", marginLeft:"auto", marginRight:"auto", display:"block"}}>Successful</h2>
            </div>
            <div className='main-div' style={{textAlign:"center"}}>
                <p style={{marginLeft:"auto", marginRight:"auto", display:"block"}}>Your reservation has been properly handled !</p>
            </div>
            <div className='main-div' style={{marginTop:"25px"}}>
                <Link to="/" className='button-normal section-category' style={{marginLeft:"auto", marginRight:"auto", display:"block"}}>Back to homepage</Link>
            </div>
        </article>
    );
}

export default ConfirmedBooking;