import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "Todo msg",
      complated: false,
    },
  ],
  addtodo: (todo) => {},
  updatetodo:(id , todo) =>{},
  deletetodo : (id)=>{},
  togglecomplate:(id)=>{}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
