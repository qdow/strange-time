function BinaryTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = hour.toString(2);
    minute = minute.toString(2);
    second = second.toString(2);
    
    return (
        <p>{hour} : {minute} : {second}</p>
    )
}

export default BinaryTime;