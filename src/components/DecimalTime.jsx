function DecimalTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = (hour / 24).toFixed(2);
    minute = (minute / 60).toFixed(2);
    second = (second / 60).toFixed(2);
    
    return (
        <p>{hour} : {minute} : {second}</p>
    )
}

export default DecimalTime;