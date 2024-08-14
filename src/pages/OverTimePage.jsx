import OverTime from '../components/OverTime';

function OverTimePage({ time }) {
    return (
        <div className="page">
            <h1>— over time —</h1>
            <div className="time-blocks"><OverTime time={time} /> </div>
            <p>For this clock, imagine that instead of ticking over to the next hour or minute at 59, it just keeps going past 60 and ticks over at 119. This makes it so every hour is off by one and every minute and second has an additional 60.</p>
            <p>As an example, 2:30:00am would be 2 - 1 = 1, 30 + 59 = 89, 00 + 60 = 60 for the time of 01:89:60.</p>
        </div>
    )
}

export default OverTimePage;