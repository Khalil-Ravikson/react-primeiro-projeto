import { useContext, useState } from "react";
import { countContext } from "../contexts/countContext";
import { OnlineUser } from "./OnlineUser";

export const Header = ( ) =>{
    
    const countCtx = useContext(countContext);
    
    return (
    <header>

            <div className=" text-4xl">
                <h1>SEM TITULO</h1>
                <OnlineUser/>
            </div>

    </header>
    );
}