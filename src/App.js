import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD_9PRyvmsbAQGWqwH-xYQ-HBnUJVof_9Q",
    authDomain: "website-pessoal-tm.firebaseapp.com",
    projectId: "website-pessoal-tm",
    storageBucket: "website-pessoal-tm.firebasestorage.app",
    messagingSenderId: "1063565920",
    appId: "1:1063565920:web:9a335ce4af86faae57a105",
    measurementId: "G-C8DEDYXXHK"
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div className="app">
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
