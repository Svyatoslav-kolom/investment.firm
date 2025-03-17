import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider value={defaultSystem} >
        <Root />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
