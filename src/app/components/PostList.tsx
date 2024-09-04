import { useContext } from "react"
import { PostConstext } from "../contexts/PostContext"

export const PostList = () =>{
    
    const PostCtx = useContext(PostConstext)
    
    const handleRemoveButton = (id : number) =>{
      PostCtx?.dispatch({ type: "remove", payload: {id} });
    }


    return (<div className="flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {PostCtx?.posts.map(item => (
            <div key={item.id} className="text-3xl text-gray-800 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 mb-4 p-6 rounded-lg shadow-lg">
              <div className="font-bold text-white mb-2">{item.title}</div>
              <div className="text-lg text-white">{item.body}</div>
              <button onClick={ () => handleRemoveButton (item.id)} > Remove </button>
            </div>
          ))} 
        </div>
      </div>
    );
}