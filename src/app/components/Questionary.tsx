import { useEffect, useState } from "react";
import { Question } from "../types/Question"

type Props = {
    question:Question;
    count:number;
    onAnswer: (answer:number) => void;
}



export const Questionary = ({question,count,onAnswer}: Props) => {

    const [selectedQuestion,setSelectedQuestion] = useState<number | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        if (isCorrect === true) {
          const audio = new Audio('/thunder-124463.mp3');
          audio.play();
        }
      }, [isCorrect]);

    const checkQuestion = (key:number) => {
        if(selectedQuestion === null)
            setSelectedQuestion(key)
            setIsCorrect(key === question.answer);
            onAnswer(key)
    }

    return(
    <div>
        <div className="mb-5 font-bold text-2xl text-start">
        {count}. {question.question}         
        </div>
        <div >
            {question.option.map((item,key)=>(
                <div 
                key={key}
                onClick={()=>checkQuestion(key)}
                className={`p-2 border-2 mb-0border mb-2 rounded cursor-pointer bg-blue-50 
                    ${selectedQuestion !== null ?  "cursor-auto "  : " cursor-pointer hover:opacity-60  "}
                    ${selectedQuestion !== null && selectedQuestion === question.answer && selectedQuestion === key && "bg-green-100 border-green-300"}
                    ${selectedQuestion !== null && selectedQuestion !== question.answer && selectedQuestion === key && "bg-red-100 border-red-300"}
                    `}>{item}</div>
            ))}
        </div>
    
    </div>
    );
}

