
import { createContext, ReactNode, useState } from 'react';

type countContextType ={
    onlineCount:number;
    setOnlineCount:(n:number) => void;
}
export const countContext = createContext<countContextType | null>(null);

type Props ={children:ReactNode;};

export const countProvider = ({ children }:Props) => {
  
  const [onlineCount,setOnlineCount] = useState(30);

  return (
    <countContext.Provider value={{onlineCount, setOnlineCount}}>
      {children}
    </countContext.Provider>
  );
}

