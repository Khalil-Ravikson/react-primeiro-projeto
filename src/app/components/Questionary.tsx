import { Question } from "../types/Question"

type Props = {
    question:Question;
    count:number;
    onAnswer: (answer:number) => void;
}



export const Questionary = ({question,count,onAnswer}: Props) => {
    
    return(
    <div>
        <div className="mb-5">
        {count}. {question.question}         
        </div>
        <div className="">
            {question.option.map((item,key)=>(
                <div 
                key={key}
                className="">{item}</div>
            ))}
        </div>
    
    </div>
    );
}

