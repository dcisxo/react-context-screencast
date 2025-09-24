import React from "react";

export const TranslationContext = React.createContext();

export const translations = {
  en: {
    greeting: "Hello World, I am",
  },
  ru: {
    greeting: "Привет, мир, я",
  },
  es: {
    greeting: "Hola Mundo, soy",
  },
  fr: {
    greeting: "Bonjour le monde, je suis",
  },
};
