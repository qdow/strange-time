import { useState } from 'react';

function RandomTime({  }) {
    let hour = Math.floor(Math.random() * 24);
    let minute = Math.floor(Math.random() * 60);
    let second = Math.floor(Math.random() * 60);
    hour = hour < 10 ? "0" + hour.toString() : hour;
    minute = minute < 10 ? "0" + minute.toString() : minute;
    second = second < 10 ? "0" + second.toString() : second;

    const [count, setCount] = useState(0);

    const [stoppedHour, setStoppedHour] = useState();
    const [hourStop, setHourStop] = useState(false);

    const [stoppedMinute, setStoppedMinute] = useState();
    const [minuteStop, setMinuteStop] = useState(false);

    const [stoppedSecond, setStoppedSecond] = useState();
    const [secondStop, setSecondStop] = useState(false);

    function stop() {
        if (count === 0) {
            setHourStop(true);
            setStoppedHour(hour);
        } else if (count === 1) {
            setMinuteStop(true);
            setStoppedMinute(minute);
        } else if (count === 2) {
            setSecondStop(true);
            setStoppedSecond(second);
        } else {
            setHourStop(false);
            setMinuteStop(false);
            setSecondStop(false);
        }

        if (count < 3) {
            setCount(count+1);
        } else {
            setCount(0);
        }
    }

    return (
        <p>
            { hourStop ? `${stoppedHour} ` : `${hour} ` } :
            { minuteStop ? ` ${stoppedMinute} ` : ` ${minute} ` } :
            { secondStop ? ` ${stoppedSecond}` : ` ${second}` }
            <button className="time-button" onClick={e => {e.preventDefault(); stop()}}>STOP</button> 
        </p>
    )
}

export default RandomTime;