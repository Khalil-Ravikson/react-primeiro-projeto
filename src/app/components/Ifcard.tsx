type props ={
    text: string;
    author?: string;
}

export const Ifcard = ({text, author}: props)=>{
    return(
        <div className="text-center border-2 border-blue-500 rounded-lg p-4">
            <h3 className="text-center text-3xl font-bold text-purple-600 italic">{text}</h3>
            <p className="text-2xl font-semibold text-orange-800 italic">{author ?? "autor desconhecido"}</p>
            
        </div>

    );
}