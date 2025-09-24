import React from "react";

import "./App.css";
import Main from "./Main";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";

function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Main />
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
