type Props ={
    name?:string;
    avatar?:string;
    roles: string[];
}

export const Person = ({name="alguem né",
    avatar ="https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    roles
    }: Props) => {
    return (
      <div className="p-3">
            <h1>{name}</h1>
            <img src= {avatar} 
                alt={name}
                className="w-40 p-3"

            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
      </div>
    );
}