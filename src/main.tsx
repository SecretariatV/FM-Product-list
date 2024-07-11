import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppContext } from "@machines/appMachine.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContext.Provider>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
