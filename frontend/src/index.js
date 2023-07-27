import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./main/App";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
