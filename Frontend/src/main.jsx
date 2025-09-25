import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // ✅ import Provider
import { store } from "./app/store.js"; // ✅ import store
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>   {/* ✅ wrap app */}
      <App />
    </Provider>
  </StrictMode>
);
