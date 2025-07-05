import {useState}from "react";
import QUESTIONS from "../questions.js"
import quizComplete from "../assets/quiz-complete.png"

export default function Quiz (){
    const [userAnswers,setUserAnswers] =  useState([]); 
    const activeQuestionIndex = userAnswers.length;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    function handleSelectedAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswer)=>{
           return [...prevUserAnswer,selectedAnswer]
        });
    }
   if(quizIsComplete){
        return (<div id='summary'>
            <h2>Quiz Completed</h2>
            <img src={quizComplete} alt="complete img" />
        </div>)
    }
     
const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; 
shuffledAnswers.sort(()=> Math.random() - 0.5);
    return(
     <div id="quiz">
           <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul>
                {shuffledAnswers.map((answer)=>(
                    <li key={answer} className="answer">
                        <button onClick={()=>handleSelectedAnswer(answer)}> {answer} </button>
                    </li>
                ))}
            </ul>
            </div>
     </div>
    );
}

/* to complete  */