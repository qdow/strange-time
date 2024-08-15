import RandomTime from '../components/RandomTime';

function RandomTimePage({ time }) {
    return (
        <div className="page">
            <h1>— random time —</h1>
            <div className="time-blocks"><RandomTime time={time} /></div>
            <p>Random time randomizes the hour minute and second values!</p>
            <p>What time is it? You choose! Press the "STOP" button to freeze each time value! <br/> 
                If you want to start over after you've stopped the clock, just click the button again. <br/>
                If you can stop them all on the same number you win!</p>
        </div>
    )
}

export default RandomTimePage;