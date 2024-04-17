// @ts-nocheck
import { Children } from "react";
import { Geoform } from "./components/Geoform";
import { Person } from "./components/Person";
import { Circle } from "./components/circle";
import { Card } from "./components/Children";
import { Ifcard } from "./components/Ifcard";
import ImageContainer from "./components/ImageContainer";
import ButtonComponent from "./components/ButtonComponent";


function Page(){
  const fullTime = new Intl.DateTimeFormat('pt-BR',{timeStyle: 'short',hour12:false}).format();
  const hour = new Date().getHours();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white 
    bg-gradient-to-r from-pink-500 to-indigo-500">
      <div className="text-9xl">
        {fullTime}
      </div>
      <div className="text-5xl font-bold"> 
      {hour >= 0 && hour < 12 && "Bom Dia 🥺​"}
      {hour >= 12 && hour < 18 && "Boa Tarde 🤓​"}
      {hour >= 18 && hour <= 23 && "Boa Noite ​😍​"}    
      </div>
    </div>
  );
}

export default Page; 