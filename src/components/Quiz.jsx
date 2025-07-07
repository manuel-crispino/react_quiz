import {useState,useCallback}from "react";
import QUESTIONS from "../questions.js"
import Question from "./Question.jsx";
import Summery from "./Summary.jsx";

export default function Quiz (){

    const [isStarted,setIsStarted] = useState(false)

    const [userAnswers,setUserAnswers] =  useState([]); 
    const activeQuestionIndex = userAnswers.length;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

      const handleSelectedAnswer = useCallback( function handleSelectedAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswer)=>{
           return [...prevUserAnswer,selectedAnswer]
        });
    },[]);


    const handleSkipAnswer = useCallback(()=> handleSelectedAnswer(null),[handleSelectedAnswer]);

 

   if(quizIsComplete){
        return <Summery userAnswers={userAnswers}/>
    }
    if   (!isStarted){

    return (<div id="quiz">
         <button onClick={()=>setIsStarted(!isStarted)}>Click to Start</button> 
         </div>)
    }
    
    return(
     <div id="quiz">
        {isStarted && 
          <Question 
     key={activeQuestionIndex}
     index={activeQuestionIndex} // use index as a key value, (react does not allow key name to be use as a prop )
     onSelectAnswer={handleSelectedAnswer}
     onSkipAnswer={handleSkipAnswer}
     />}
 
     </div>
    );
}

/* to complete  */