import { useContext, useState } from "react";
import { CountContext } from "../contexts/CountContext";
import { OnlineUser } from "./OnlineUser";

export const Header = ( ) =>{
    
    const countCtx = useContext(CountContext);
    
    return (
    <header>

            <div className=" text-4xl">
                <h1>SEM TITULO</h1>
                <OnlineUser/>
            </div>

    </header>
    );
}