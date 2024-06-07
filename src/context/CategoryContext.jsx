import React, { createContext, useContext } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  return (
    <CategoryContext.Provider value={{}}>{children}</CategoryContext.Provider>
  );
}
