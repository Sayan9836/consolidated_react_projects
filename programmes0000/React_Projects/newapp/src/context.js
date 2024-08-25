import React, { createContext, useContext, useState } from 'react'

export const newContext = createContext();

export const Abc = (props) => {
    const a = "jbdckhbhcb"
    const [state, setState] = useState([]);
    return (
        <newContext.Provider value={{ a, state, setState }}>
            {props.children}                                           
        </newContext.Provider>                            
    )
}

const contexState=()=>{
    return useContext(newContext);
}


