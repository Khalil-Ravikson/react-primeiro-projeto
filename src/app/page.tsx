"use client";

import { Header } from "./components/Header";
import { CountProvider } from "./contexts/CountContext";
const page = () => {
    return (
    <div>
        
    <CountProvider>
        <Header/>
    </CountProvider>

    </div>
    

    );
}
export default page;