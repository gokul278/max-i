import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

import global_en from "./assets/Translation/EN/global.json";
import global_de from "./assets/Translation/DE/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

AOS.init({
  duration: 700, // Duration of animations in milliseconds
});

i18next.init({
  interpolation: { escapeValue: false },
  lng: "de",
  resources: {
    de: {
      global: global_de,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
