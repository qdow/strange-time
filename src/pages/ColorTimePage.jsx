import ColorTime from '../components/ColorTime';

function BinaryTimePage({ time }) {
    return (
        <div className="page">
            <h1>— color time —</h1>
            <div className="time-blocks"><ColorTime time={time} /></div>
            <p>Color Time is pretty self-explanatory. It's the time represented by colors instead of numbers.</p>
            <p>Every color comes from a list of <a href="https://htmlcolorcodes.com/color-names/" target="_blank">named colors</a> (link describes all named colors but this clock only uses a subset of them).
                The number of the hour, minute, and second correspond to the number of a color on the list.</p>
        </div>
    )
}

export default BinaryTimePage;