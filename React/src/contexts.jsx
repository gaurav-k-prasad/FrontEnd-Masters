import { createContext } from "react";

// ? Defining for typescript as we'll have a react hook in this and data is a array[] and set is a function
export const CartContext = createContext([[], function () {}]);
