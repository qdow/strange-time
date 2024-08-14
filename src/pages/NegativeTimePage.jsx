import NegativeTime from '../components/NegativeTime';

function NegativeTimePage({ time }) {
    return (
        <div className="page">
            <h1>— negative time —</h1>
            <div className="time-blocks"><NegativeTime time={time} /> </div>
            <p>Negative Time is backwards, so instead of each hour being counted up from 00 (midnight), it goes the opposite way. which means 1am is -23, 1pm is -11, etc.</p> 
            <p>It is the same for the minute and second: instead of counting up from 0 to 59, it counts down from -60.</p>
        </div>
    )
}

export default NegativeTimePage;