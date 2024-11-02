import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [level, setLevel] = useState("medium");
  return (
    <Context.Provider value={{ level, setLevel }}>{children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
