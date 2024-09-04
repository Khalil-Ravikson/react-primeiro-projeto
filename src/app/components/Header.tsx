import { useContext, useState } from "react";
import { PostConstext } from "../contexts/PostContext";




export const Header = ( ) =>{
    const headeCtx = useContext(PostConstext);

    const [tittleInput, setTittleInput ] = useState("");
    const [bodyInput, setBodyInput ] = useState("");

    const handleButtonClick = () =>{
        if(tittleInput && bodyInput){
            headeCtx?.dispatch(
                {
                    type: "add",payload: {title: tittleInput, body: bodyInput}
                }
            );
            setTittleInput("");
            setBodyInput("");
        }
    }
    
    return (
    <header className="flex flex-col items-center justify-center"> 
    <h1 className="text-4xl uppercase p-3 text-center mb-6 font-bold">Sistema de Post sem banco de dados</h1>
    
    <div className="max-w-xl w-full flex flex-col gap-4 border border-dotted border-gray-300 bg-white text-gray-800 p-6 rounded-lg shadow-lg ">
        
        <input 
        type="text"
        placeholder="Digite o título"
        className="border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={tittleInput}
        onChange={e=>setTittleInput(e.target.value)}
        />

        <textarea 
        placeholder="Digite aqui seu post"
        className="border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={bodyInput}
        onChange={e=>setBodyInput(e.target.value)}
        />

        <button onClick={handleButtonClick} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
        Adicionar
        </button>

    </div>

    </header>
    );
}