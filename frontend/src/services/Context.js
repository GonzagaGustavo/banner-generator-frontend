import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [ img, setImg ] = useState(null)
    return (
        <Context.Provider value={{ img, setImg }}>
            {children}
        </Context.Provider>
    )
}