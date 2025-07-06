import {useState,useCallback}from "react";
import QUESTIONS from "../questions.js"
import quizComplete from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz (){
    const [answerState,setAnswerState ] = useState('');
    const [userAnswers,setUserAnswers] =  useState([]); 
    const activeQuestionIndex = userAnswers.length;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

      const handleSelectedAnswer = useCallback( function handleSelectedAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevUserAnswer)=>{
           return [...prevUserAnswer,selectedAnswer]
        });
        setTimeout(()=>{
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
            }else{
                setAnswerState('wrong')
            }
        },1000);

    },[]);


    const handleSkipAnswer = useCallback(()=> handleSelectedAnswer(null),[handleSelectedAnswer]);

 

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
             <QuestionTimer
                key={activeQuestionIndex}
                onTimeout={handleSkipAnswer} 
                timeout={10000} 
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul>
                {shuffledAnswers.map((answer)=>(
                    <li key={answer} className={`answer ${answerState}`}>
                        <button onClick={()=>handleSelectedAnswer(answer)}> {answer} </button>
                    </li>
                ))}
            </ul>
            </div>
     </div>
    );
}

/* to complete  */