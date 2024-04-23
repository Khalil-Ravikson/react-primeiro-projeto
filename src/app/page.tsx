'use client';



const Page = () => {


  const handleButtonClick = () =>
 {
  alert("funcionou");
 }

  return (
   <div className="w-screen h-screen flex justify-center items-center" >
    <button onClick={handleButtonClick} className="p-3 border border-blue-300 bg-blue-500 text-white rounded-md">
      Clique aqui 
    </button>
   </div>

  );
}

export default Page; 