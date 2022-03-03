import { createContext } from "react";

export const Context = createContext({
    isLogged: false,
    userPost: [],
    userId: null,
});