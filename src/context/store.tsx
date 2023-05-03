import { createContext, useState } from "react";

import { Tasks, Authors } from "../mockup/data.ts";

import ITask from "../types/ITask.ts";
import IAuthor from "../types/IAuthor";


export interface IContext {
    tasks: ITask[],
    authors: IAuthor[], 
    setTasks?: any,
    setAuthors?: any
}

export const StoreContext = createContext<IContext>({ tasks: [], authors: [] });

export default function StoreProvider({ children }: any) {
    const [tasks, setTasks] = useState<ITask[]>(Tasks);
    const [authors, setAuthors] = useState<IAuthor[]>(Authors);

    return (
        <StoreContext.Provider value={{ tasks, authors, setTasks, setAuthors }}>
            { children }
        </StoreContext.Provider>
    )
}
