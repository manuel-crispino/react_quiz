import {useState,useCallback, useRef}from "react";
import QUESTIONS from "../questions.js"
import quizComplete from "../assets/quiz-complete.png"
import Question from "./Question.jsx";

export default function Quiz (){

   
    const [answerState,setAnswerState ] = useState('');
    const [userAnswers,setUserAnswers] =  useState([]); 
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;
   
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

      const handleSelectedAnswer = useCallback( function handleSelectedAnswer(selectedAnswer){

        if (answerState === '' && selectedAnswer === null ){
           console.log('skipped answer');
            setUserAnswers((prevUserAnswers) => [...prevUserAnswers, null]);
        return;
        };

        setAnswerState('selected');
        setUserAnswers((prevUserAnswer)=>{
           return [...prevUserAnswer,selectedAnswer]
        });
        setTimeout(()=>{
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
            }else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('');
            },2000);
        },1000);

    },[activeQuestionIndex,answerState]);


    const handleSkipAnswer = useCallback(()=> handleSelectedAnswer(null),[handleSelectedAnswer]);

 

   if(quizIsComplete){
        return (<div id='summary'>
            <h2>Quiz Completed</h2>
            <img src={quizComplete} alt="complete img" />
        </div>)
    }

    return(
     <div id="quiz">
   <Question 
     key={activeQuestionIndex}
     answers={QUESTIONS[activeQuestionIndex].answers} 
     questionText={QUESTIONS[activeQuestionIndex].text}
     selectedAnswer={userAnswers[userAnswers.length -1]}
     onSelectAnswer={handleSelectedAnswer}
     onSkipAnswer={handleSkipAnswer}
     answerState={answerState}
     />
     </div>
    );
}

/* to complete  */