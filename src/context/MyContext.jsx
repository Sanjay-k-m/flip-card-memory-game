import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [level, setLevel] = useState("medium");
  const [score, setScore] = useState({ easy: [], medium: [], hard: [] });
  return (
    <Context.Provider value={{ level, setLevel, score, setScore }}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
