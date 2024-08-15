import colors from "../assets/colors";

function ColorTimeBlock({ time }) {
    const blockColor = {
        bg: { backgroundColor: colors[time] }
    }

    return (
        <span className="color-block" style={blockColor.bg}></span>
    )
}

export default ColorTimeBlock;