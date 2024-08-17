import { createContext, ReactNode, useContext, useState } from "react";
import { Post } from "../types/Post";

type postConstextType ={
    posts: Post[];
    addPost: (title:string, body: string) => void;
}
export const PostConstext = createContext<postConstextType | null>(null);


export const PostProvider = ({children}:{children : ReactNode}) =>{
    const [posts,setPosts] = useState<Post[]>([])
    const addPost = (title:string, body:string) => {
        setPosts([...posts, {id: posts.length, title,body}])
    }

    return(
    <PostConstext.Provider value={{ posts, addPost }}>{children}</PostConstext.Provider>
    );

}