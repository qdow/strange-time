function NegativeTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = Math.abs(hour - 24) < 10 ? "-0" + Math.abs(hour-24).toString() : hour - 24;
    minute = Math.abs(minute - 60) < 10 ? "-0" + Math.abs(minute-60).toString() : minute - 60;
    second = Math.abs(second - 60) < 10 ? "-0" + Math.abs(second-60).toString() : second - 60;
    
    return (
        <p>{hour} : {minute} : {second}</p>
    )
}

export default NegativeTime;