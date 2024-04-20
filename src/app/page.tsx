// @ts-nocheck


import { StudentsTable } from "./components/StudentsTable";
import { students } from "./data/Students";

function Page(){


  return (
   <div className="container mx-auto" >
    <h1 className="text-4xl mb-5">Lista de Estudantes</h1>
          <StudentsTable student={students} />
      
   </div>

  );
}

export default Page; 