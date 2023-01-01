import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DndProvider>
  </BrowserRouter>
);
