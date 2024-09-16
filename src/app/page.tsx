"use client";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";

const page = () => {
    return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 min-h-screen text-white p-6">
        <PostProvider>
            <div className="container mx-auto">
                <Header/>
                <PostList/>
                <Footer/>
            </div> 
        </PostProvider>
   
    </div>

    );
}
export default page;