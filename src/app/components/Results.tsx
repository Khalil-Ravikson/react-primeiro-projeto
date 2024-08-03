import { Question } from "../types/Question"



type Props = {
    question : Question[];
    answer : number[]; 
}


export const Results = ({ question, answer }: Props) => {
     
    return(
    <div >
       { question.map((item,key) => (
        <div key={key} className="mb-3"> 
            <div className="font-sans"> {key+1}. {item.question} </div> 
            <div>
            <span>({item.answer === answer[key] ? "acertou":"errou"}) </span>
            {item.option[item.answer]}
        
            </div>
            
        
        
        </div>
        ))}
    </div>

)}
