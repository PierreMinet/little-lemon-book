import BookingForm from "./BookingForm";

function Booking() {
    return (
        <article>
            <div className='main-div'>
                <h2 style={{color:"#333333"}}>Reservations</h2>
            </div>
            <div className='main-div' style={{marginTop:"50px"}}>
                <BookingForm />
            </div>
        </article>
    );
}

export default Booking;