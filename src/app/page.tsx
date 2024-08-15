"use client";

import { Header } from "./components/Header";
import { CountProvider } from "./contexts/countContext";
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