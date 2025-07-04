import imgLogo from "../assets/quiz-logo.png"

export default function Header (){

    return(
        <header>
            <img src={imgLogo} alt="" />
            <h1>React Quiz</h1>
        </header>
    )
}