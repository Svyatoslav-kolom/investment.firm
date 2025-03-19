import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./root.tsx";
import { theme } from "./theme.ts";
import "./fonts/stylesheet.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider value={theme} >
        <Root />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
