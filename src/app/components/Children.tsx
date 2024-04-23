import { ReactNode } from "react";

type props = {
    children: ReactNode;
}

export const Card = ({children}:props) => {
    return (
        <div className="text-center border-2 border-blue-500 rounded-lg p-4">
            {children}
        </div>
    );
} 