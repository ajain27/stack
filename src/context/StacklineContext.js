import { createContext, useContext } from "react";

export const StacklineContext = createContext();

export function useStackline() {
  return useContext(StacklineContext);
}
