import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {

    const navigate = useNavigate();

    const occasions = [
        "Birthday",
        "Anniversary",
    ];

    const today = new Date();
    function formatDate(date) {
    return date.toISOString().split("T")[0];
    }

    const [date, setDate] = useState(formatDate(today));
    const [time, setTime] = useState(props.availableTimes.length > 0 ? props.availableTimes[0] : '');
    const [guestsAmount, setGuestAmount] = useState(1);
    const [resOccasion, setResOccasion] = useState('Birthday');

    const timesOptions = props.availableTimes.map((time) => <option key={time}>{time}</option>);
    const occasionOptions = occasions.map((occasion) => <option key={occasion}>{occasion}</option>);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form sent");
        console.log(`Date : ${date}, Time: ${time}, Guest: ${guestsAmount}, Occasion: ${resOccasion}`)
        const datas = [date, time, guestsAmount, resOccasion];
        const dataSubmitted = props.submitForm(datas);

        if (dataSubmitted) {
            navigate("/confirm");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-div">
                <label htmlFor="res-date" className="lead-text">
                    Choose date
                </label>
                <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    props.dispatch({type: 'UPDATE_TIMES', payload: e.target.value});
                }}
                required
                />
            </div>
            <div className="form-div">
                <label htmlFor="res-time" className="lead-text">
                    Choose time
                </label>
                <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                >
                    {timesOptions};
                </select>
            </div>
            <div className="form-div">
                <label htmlFor="guests" className="lead-text">
                    Number of guests
                </label>
                <input
                type="number"
                placeholder="1"
                min={1}
                max={10}
                id="guests"
                value={guestsAmount}
                onChange={(e) => setGuestAmount(e.target.value)}
                required
                />
            </div>
            <div className="form-div">
                <label htmlFor="occasion" className="lead-text">
                    Occasion
                </label>
                <select
                id="occasion"
                value={resOccasion}
                onChange={(e) => setResOccasion(e.target.value)}
                required
                >
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