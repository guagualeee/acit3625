import React, { useEffect, useState, createContext, useReducer } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {initialState, reducer} from "./reducer"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Error from "./components/Error"

export const AppContext = createContext();
function App(props) {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;
  return (
    <ThemeProvider theme={currentTheme} className="todoapp stack-large">
      <AppContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </AppContext.Provider>
    </ThemeProvider>
  );
}
const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #e5e5e5;
    font-family: sans-serif;
  }
`;

export default App;