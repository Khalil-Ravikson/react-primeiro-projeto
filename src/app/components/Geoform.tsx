import { Square } from "./Square";
import { Circle } from "./circle";

export const Geoform = () => {
    return(
        <div >
            <h1 style={{fontStyle: "italic"}} className="text-2xl font-bold ">formas geometricas</h1>
        
            <div className= "flex gap-2 border-2 p-3 ">
            
                <Square/>
                <Circle/>
            </div>
        </div>
    );
}