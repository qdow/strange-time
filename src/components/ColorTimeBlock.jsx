import { colors } from "../assets/colors.mjs";

function ColorTimeBlock({ time }) {
    const blockColor = {
        bg: { backgroundColor: colors[time] }
    }

    return (
        <span className="color-block" style={blockColor.bg}></span>
    )
}

export default ColorTimeBlock;