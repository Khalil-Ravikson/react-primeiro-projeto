import { createContext, Dispatch, ReactNode, useContext, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { PostActions, postReducer } from "@/reducers/postReducer";

type postConstextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}
export const PostConstext = createContext<postConstextType | null>(null);


export const PostProvider = ({ children }: { children: ReactNode }) => {

    const [posts, dispatch] = useReducer(postReducer, []);

    return (
        <PostConstext.Provider value={{ posts, dispatch }}>{children}</PostConstext.Provider>
    );

}