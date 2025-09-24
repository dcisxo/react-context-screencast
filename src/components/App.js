import React from "react";

import "./App.css";
import Main from "./Main";
import {
  TranslationContext,
  translations,
} from "../contexts/translationContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [lang, setLang] = React.useState("fr");
  const [currentUser, setCurrentUser] = React.useState({ name: "Default" });

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <CurrentUserContext.Provider value={currentUser}>
          <Main />
        </CurrentUserContext.Provider>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
