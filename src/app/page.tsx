import { Children } from "react";
import { Geoform } from "./components/Geoform";
import { Person } from "./components/Person";
import { Circle } from "./components/circle";
import { Card } from "./components/Children";
import { Ifcard } from "./components/Ifcard";

function Page(){
  return (
    <div>
      <Ifcard text=" Texto Foda" author="B.O Horcker" />
    </div>
  );
}

export default Page; 