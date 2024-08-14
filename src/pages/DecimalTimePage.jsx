import DecimalTime from '../components/DecimalTime';

function DecimalTimePage({ time }) {
    return (
        <div className="page">
            <h1>— decimal time —</h1>
            <div className="time-blocks"> <DecimalTime time={time} /> </div>
            <p>Decimal Time is the hour, minute, and second represented as a fraction of their total count.</p>
            <p>So for example, 2:30am would be 2/60 = 0.03 for the hour, 30/60 = 0.50 for the minute, with the total time of 0.03:0.50 (plus the seconds but I think you get the idea)</p>
        </div>
    )
}

export default DecimalTimePage;