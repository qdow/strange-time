import BinaryTime from '../components/BinaryTime';

function BinaryTimePage({ time }) {
    return (
        <div className="page">
            <h1>— binary time —</h1>
            <div className="time-blocks"><BinaryTime time={time} /></div>
            <p>Binary Time converts the hour, minute, and second into binary.</p>
            <p>From <a href="https://en.wikipedia.org/wiki/Binary_number#Decimal_to_binary" target="_blank">Wikipedia</a>, since it is better at explaining than I am:</p>
            <p><em>"To convert from a base-10 integer to its base-2 (binary) equivalent, the number is divided by two. The remainder is the least-significant bit. The quotient is again divided by two; its remainder becomes the next least significant bit. This process repeats until a quotient of one is reached. The sequence of remainders (including the final quotient of one) forms the binary value, as each remainder must be either zero or one when dividing by two. For example, (357) [in base-10] is expressed as (101100101)."</em></p>
        </div>
    )
}

export default BinaryTimePage;