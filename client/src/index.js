import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { initialState, reducer } from "./reducers/reducer";
import App from "./App";

export const AppContext = createContext();

const Root = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyles />
        <App />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

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

ReactDOM.render(<Root />, document.getElementById("root"));
