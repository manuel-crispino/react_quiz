import {useState}from "react";
import QUESTIONS from "../questions.js"

export default function Quiz (){
    const [userAnswers,setUserAnswers] =  useState([]); 

    const activeQuestionIndex = userAnswers.length;

    function handleSelectedAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswer)=>{
           return [...prevUserAnswer,selectedAnswer]
        });
    }
    
    return(
     <div id="quiz">
           <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul>
                {QUESTIONS[activeQuestionIndex].answers.map((answer)=>(
                    <li key={answer} className="answer">
                        <button onClick={()=>handleSelectedAnswer(answer)}> {answer} </button>
                    </li>
                ))}
            </ul>
            </div>
     </div>
    );
}