import { useContext } from "react";
import { countContext } from "../contexts/countContext";




export const OnlineUser = () => {
 
    const countCtx= useContext(countContext);
    const handle = () => {
        countCtx?.setOnlineCount(0)
    }
    return (


     


    <div className="p-3 text-2xl font-sans">
        <p>Online {countCtx?.onlineCount}</p>
        <button onClick={handle} className="p-3 text-2xl font-sans"> BAN ALL </button>

    </div>
 )   
}