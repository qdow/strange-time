import ColorTimeBlock from './ColorTimeBlock';

function ColorTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    return (
        <p>
            <ColorTimeBlock time={hour} />:
            <ColorTimeBlock time={minute} />:
            <ColorTimeBlock time={second} />
        </p>
    )
}

export default ColorTime;