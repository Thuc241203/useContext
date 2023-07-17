import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.tsx";
import CounterProvider from "./context/CounterContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </ProductProvider>
);
