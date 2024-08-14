function OverTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    
    hour = hour - 1 < 10 ? "0" + (hour-1).toString() : hour - 1;
    minute = minute + 59;
    second = second + 60;

    return (
        <p>{hour} : {minute} : {second}</p>
    )
}
export default OverTime;