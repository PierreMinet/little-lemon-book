import { useState } from "react";

function BookingForm(props) {

    const occasions = [
        "Birthday",
        "Anniversary",
    ];

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestsAmount, setGuestAmount] = useState(1);
    const [resOccasion, setResOccasion] = useState('Birthday');

    const timesOptions = props.availableTimes.map((time) => <option key={time}>{time}</option>);
    const occasionOptions = occasions.map((occasion) => <option key={occasion}>{occasion}</option>);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form sent");
        console.log(`Date : ${date}, Time: ${time}, Guest: ${guestsAmount}, Occasion: ${resOccasion}`)};

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-div">
                <label htmlFor="res-date">
                    Choose date
                </label>
                <input type="date" id="res-date" value={date} onChange={(e) => {
                    setDate(e.target.value);
                    props.dispatch({type: 'UPDATE_TIMES', payload: e.target.value});
                }} />
            </div>
            <div className="form-div">
                <label htmlFor="res-time">
                    Choose time
                </label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {timesOptions};
                </select>
            </div>
            <div className="form-div">
                <label htmlFor="guests">
                    Number of guests
                </label>
                <input type="number" placeholder="1" min={1} max={10} id="guests" value={guestsAmount} onChange={(e) => setGuestAmount(e.target.value)} />
            </div>
            <div className="form-div">
                <label htmlFor="occasion">
                    Occasion
                </label>
                <select id="occasion" value={resOccasion} onChange={(e) => setResOccasion(e.target.value)}>
                    {occasionOptions}
                </select>
            </div>
            <div className="form-div">
                <button type="submit" style={{marginTop: 25}} className='button-normal section-category'>Next</button>
            </div>
        </form>
    );
}

export default BookingForm;