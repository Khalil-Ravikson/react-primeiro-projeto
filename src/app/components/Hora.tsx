



export const Hora = () =>{
    const fullTime= new Intl.DateTimeFormat('pt-BR',{timeStyle: 'short',hour12:false}).format();
    const hour= new Date().getHours();
    return(
            <div>
                <div className="text-9xl">{fullTime}</div>
                <div className="text-5xl font-bold"> 
                {hour >= 0 && hour < 12 && "Bom Dia 🥺​"}
                {hour >= 12 && hour < 18 && "Boa Tarde 🤓​"}
                {hour >= 18 && hour <= 23 && "Boa Noite ​😍​"}    
                </div>
            </div>
    );
}