import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { initialState, reducer } from "./reducer";

import Nav from "./Nav";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyles />
        <Nav />
        <h1>Hi Dev.to!</h1>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: sans-serif;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
