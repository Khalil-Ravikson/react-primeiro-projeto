// @ts-nocheck


"use client";

import { useState } from "react";
import {questionsData } from "./data/questionsData";
import { Questionary } from "./components/Questionary";
import { Results } from "./components/Results";




const Page = () => {
  
const title = "QUESTIONARIO IMPORTANTE";
const [answers,setAnswers] = useState<number[]>([]);
const [currentQuestion,setCurrentQuestion]= useState(0);
const [showResult,setShowResult] = useState(false); 

const nextQuestion = () =>{
  if(questionsData[currentQuestion+1]){
    setCurrentQuestion(currentQuestion+1);
  }else {
    setShowResult(true)
  }
} 
const handleAnswer = (answer:number) => {
  const newAnswers = [...answers];
  newAnswers[currentQuestion] = answer; // Salva a resposta na posição correta do array
  setAnswers(newAnswers);
  setCurrentQuestion(null); // Reinicia o estado da questão anterior
  nextQuestion()
};

const handleRestartButton = () => {
  setAnswers([]);
  setCurrentQuestion(0);
  setShowResult(false);
};

const handleAfterButton = () => {  
  if(questionsData[0]){
    handleRestartButton();
  }else{
    const newAnswers = [...answers];
    newAnswers.pop(); // Remove a última resposta do array
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion - 1);
  }
};

const handleNextButton = () => {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-700">
      <div className="w-full max-w-xl rounded-md bg-slate-100 text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl text-blue-600 border-b">{title}</div>
          <div className="p-5 font-bold text-center text-gray-800 ">
            {!showResult && 
            <Questionary
            question={questionsData[currentQuestion]}
            count={currentQuestion + 1 }
            onAnswer={handleAnswer}
            />}
            {showResult && 
            <Results question={questionsData} answer={answers} />} 
            
          </div> 
          <div className="p-5 font-bold text-center text-black border-t">
           {currentQuestion + 1 } de {questionsData.length} pergunta{questionsData.length>=1?"":"s"}
           
          </div>
          {showResult && 
          <button onClick={handleRestartButton}  className="p-5 items-center" > reiniciar </button>
            }
           {!showResult &&  
          <button onClick={handleAfterButton} className="p-5 items"> questao anterior </button>
           }
          </div>
    </div>
  );
 
}
  
 


export default Page; 