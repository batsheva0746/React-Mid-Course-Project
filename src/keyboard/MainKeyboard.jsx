import { useState } from "react"
import ShowKeyboard from "./ShowKeyboard"
import { bigLetters, shiftLetters, smallLetters, hebrewLetters, emojis } from "./Single"

const MainKeyboard = () => {
    const [letters, setLetters] = useState([])
    const [letter, setLetter] = useState("")
    const [color, setColor] = useState("black")
    const [backColor, setBackColor] = useState("white")
    const [font, setFont] = useState("Ariel")
    const [fontSize, setFontSize] = useState("16px")
    const [language, setLanguage] = useState("English")
    const [caps, setCaps] = useState(false)
    const [shift, setShift] = useState(false)
    const [showEmojis, setShowEmojis] = useState(false)
    const [bold, setBold] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [Abig, setAbig] = useState(false)
    const [Asmall, setAsmall] = useState(false)

    const currentLetters =
        showEmojis ? emojis
            : shift ? shiftLetters 
                :caps ? bigLetters 
                    :language === "Hebrew" ? hebrewLetters 
                        :smallLetters

    const addLetter = (color, letter, backColor, font, bold, underline, Abig, Asmall, fontSize) => {
        const obj = {
            color: color,
            letter: letter,
            backColor: backColor,
            font: font,
            bold: bold,
            underline: underline,
            Abig: Abig,
            Asmall: Asmall,
            fontSize: fontSize
        }
        setLetters([...letters, obj])
        setShift(false)
    }
    const increaseLetters = () => {
        setLetters(letters.map(item => ({ ...item, letter: item.letter?.toUpperCase() })))
    }

    const decreaseLetters = () => {
        setLetters(letters.map(item => ({ ...item, letter: item.letter?.toLowerCase() })))
    }
    return (
        <>
            <ShowKeyboard letters={letters} bold={bold} underline={underline} Abig={Abig} Asmall={Asmall} fontSize={fontSize} font={font} color={color} backColor={backColor} />

            <div className="keyboard">
                {currentLetters.map((row, index) => {
                    return (
                        <div key={index}>
                            {row.map((l, colIndex) => {
                                return (
                                    <div key={colIndex}>
                                        {l === "FontSize" ? (<select onChange={(event) => { setFontSize(event.target.value) }}>
                                            <option value="12px">12</option>
                                            <option value="16px">16</option>
                                            <option value="24px">24</option>
                                            <option value="32px">32</option>
                                            <option value="48px">48</option>
                                        </select>) :
                                            l === "FontFamily" ? (<select onChange={(event) => { setFont(event.target.value) }}>
                                                <option value="Ariel">Ariel</option>
                                                <option value="Papyrus">Papyrus</option>
                                                <option value="Segoe Script">Segoe Script</option>
                                                <option value="Courier New">Courier New</option>
                                                <option value="Georgia">Georgia</option>
                                            </select>) :
                                                l === "Color" ? (
                                                    <input type="color" onChange={(event) => { setColor(event.target.value) }}></input>
                                                ) :
                                                    l === "BackColor" ? (
                                                        <input type="color" onChange={(event) => { setBackColor(event.target.value) }}></input>
                                                    ) :
                                                        <button className={
                                                            l === "Space" ? "space" :
                                                                l === "Backspace" ? "backspace" :
                                                                    l === "Enter" ? "enter" :
                                                                        l === "Caps lock" ? "caps" :
                                                                            l === "Shift" ? "shift" :
                                                                                l === "clear" ? "clear" :
                                                                                    l === "BOLD" ? "bold" :
                                                                                        l === "UN" ? "underline" :
                                                                                            l === "language" ? "language" :
                                                                                                l === "emojis" ? "emojis" :
                                                                                                    "regular"
                                                        } onClick={() =>
                                                            l === "Enter" ? setLetters(prev => [...prev, { type: "newLine" }]) :
                                                                l === "Space" ? setLetters([...letters, { type: "space" }]) :
                                                                    l === "Caps lock" ? setCaps(!caps) :
                                                                        l === "Shift" ? setShift(!shift) :
                                                                            l === "emojis" ? setShowEmojis(!showEmojis) :
                                                                                l === "language" ? setLanguage(language === "English" ? "Hebrew" : "English") :
                                                                                    l === "BOLD" ? setBold(!bold) :
                                                                                        l === "UN" ? setUnderline(!underline) :
                                                                                            l === "A+" ? increaseLetters() :
                                                                                                l === "A-" ? decreaseLetters() :
                                                                                                    l === "Backspace" ? setLetters(letters.slice(0, -1)) :
                                                                                                        l === "clear" ? setLetters([]) :
                                                                                                            addLetter(color, l, backColor, font, bold, underline, Abig, Asmall, fontSize)}> {l}</button>}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div >
        </>
    )
}
export default MainKeyboard