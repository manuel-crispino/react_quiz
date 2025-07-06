
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question (
    {
        questionText,
        answers,
        onSelectAnswer,
        selectedAnswer,
        answerState,
        onSkipAnswer

    }
    ){
    return(
        <div id='question'>
             <QuestionTimer
                onTimeout={onSkipAnswer} 
                timeout={10000} 
            />
            <h2>{questionText}</h2>
           <Answers 
                answers={answers}
                selectedAnswer = {selectedAnswer} 
                answerState = {answerState} 
                onSelect={onSelectAnswer}

           />
        </div>
    )
}