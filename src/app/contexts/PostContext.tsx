import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { PostActions, postReducer } from "@/reducers/postReducer";

const STORAGE_KEY = "postContextContent";

type postConstextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}
export const PostConstext = createContext<postConstextType | null>(null);



export const PostProvider = ({ children }: { children: ReactNode }) => {

    const [posts, dispatch] = useReducer(
        postReducer, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    },[posts]);

    return (
        <PostConstext.Provider value={{ posts, dispatch }}>{children}</PostConstext.Provider>
    );

}