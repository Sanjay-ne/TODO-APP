import { useContext, createContext, useState } from "react";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([{
        id: 1,
        name: "name"
    }
])

const  Adduser=(name)=>{
setUser((prev)=>([...prev,{id:new Date(),name}]))
}

const Deleteuser=(id)=>{
    setUser((prev)=>prev.filter(user=>user.id!==id))
}




    return (
        <UserContext.Provider value={{ user,Adduser,Deleteuser }}>
            {children}
        </UserContext.Provider>
    )

}


export const useUser = () => {
    return useContext(UserContext)
}