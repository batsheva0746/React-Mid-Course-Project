import SingleLetter from "./SingleLetter"

const ShowKeyboard = ({ letters, bold, underline, Abig, Asmall, fontSize, font, color, backColor }) => {
    return (
        <div style={{
            fontSize: fontSize,
            fontFamily: font,
            color: color,
            backColor: backColor
        }}>

            {letters.map((single, index) => {
                if (single.type === "newLine" || single.type === "space")
                    return <SingleLetter key={index} singleletter={single} />
                return (
                    <SingleLetter key={index} singleletter={single}
                    />)
            })}
        </div>
    )
}
export default ShowKeyboard