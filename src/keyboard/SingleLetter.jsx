const SingleLetter = ({ singleletter }) => {
    if (singleletter.type === "newLine")
        return <div style={{ height: "20px" }}></div>
    if (singleletter.type === "space")
        return <>    </>

    return (
        <span style={{
            color: singleletter.color,
            backgroundColor: singleletter.backColor,
            fontFamily: singleletter.fontFamily,
            fontWeight: singleletter.bold ? "bold" : "normal",
            textDecoration: singleletter.underline ? "underline" : "none",
        }}>

            {singleletter.letter}
        </span>
    )
}
export default SingleLetter