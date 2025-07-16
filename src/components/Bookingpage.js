import BookingForm from "./BookingForm";

function Bookingpage(props) {
    return(
        <>
            <article>
                <div className='main-div'>
                    <h2 style={{color:"#333333"}}>Reservations</h2>
                </div>
                <div className='main-div' style={{marginTop:"50px"}}>
                    <BookingForm 
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    submitForm={props.submitForm}
                    />
                </div>
            </article>
        </>
    );
}

export default Bookingpage;