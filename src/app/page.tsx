// @ts-nocheck


"use client";

import { useState } from "react";
import {questionsData } from "./data/questionsData";
import { Questionary } from "./components/Questionary";




const Page = () => {
  
const title = "QUESTIONARIO IMPORTANTE";
const [currentQuestion,setCurrentQuestion]= useState(0);  
const handleAnswer = (answer:number) => {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-700">
      <div className="w-full max-w-xl rounded-md bg-slate-100 text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl text-blue-600 border-b">{title}</div>
          <div className="p-5 font-bold text-center text-gray-800 ">
            <Questionary
            question={questionsData[currentQuestion]}
            count={currentQuestion + 1 }
            onAnswer={handleAnswer}
            />
            
          </div> 
          <div className="p-5 font-bold text-center text-black border-t">
           {currentQuestion + 1 } de {questionsData.length} pergunta{questionsData.length>=1?"":"s"}
          </div>
      </div>
    </div>
  );
 
}
  
 


export default Page; 