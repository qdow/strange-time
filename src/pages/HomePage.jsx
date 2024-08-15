import { useNavigate } from "react-router-dom";
import DecimalTime from "../components/DecimalTime";
import OverTime from "../components/OverTime";
import BinaryTime from "../components/BinaryTime";
import NegativeTime from "../components/NegativeTime";
import ColorTime from "../components/ColorTime";
import RandomTime from "../components/RandomTime";
import PokemonTime from "../components/PokemonTime";

function HomePage({ time }) {
    const navigate = useNavigate();

    return (
        <div className="page">
            <h1>— WELCOME TO STRANGE TIME —</h1>
            <p>Have you ever said to yourself, <em>"If only I could see what time it was in the most difficult way possible"</em>? Then you've come to the right place!</p>
            <p>Here at Strange Time, you can find a variety of clocks displaying the current time in different confusing formats! All the clocks use 24hr time format to further confuse those of you used to 12hr clocks!</p>
            <p>To view a description of each clock, you can click on its name.</p>
            <div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/decimal-time")}}>decimal time</a></p>
                    <DecimalTime time={time} /> 
                </div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/over-time")}}>over time</a></p>
                    <OverTime time={time} /> 
                </div>
            </div>

            <div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/binary-time")}}>binary time</a></p>
                    <BinaryTime time={time} /> 
                </div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/negative-time")}}>negative time</a></p>
                    <NegativeTime time={time} /> 
                </div>
            </div>

            <div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/color-time")}}>color time</a></p>
                    <ColorTime time={time} /> 
                </div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/random-time")}}>random time</a></p>
                    <RandomTime />
                </div>
            </div>

            <div>
                <div className="time-blocks"> 
                    <p><a href="/" onClick={e => {e.preventDefault(); navigate("/pokemon-time")}}>pokemon time!</a></p>
                    <PokemonTime time={time} /> 
                </div>
            </div>

            <div><p className="tiny">(if someone else has made something like this before, I promise I am not copying, I just thought it was a silly fun little project idea!)</p></div>
        </div>
    )
}

export default HomePage;