import { useContext } from "react";
import { PostConstext } from "../contexts/PostContext";

export const Footer = () => {
    
    const footerCtx = useContext(PostConstext)
    
    return (



        <div className="text-2xl">Total de post ate agora : {footerCtx?.posts?.length}</div>
    );
}