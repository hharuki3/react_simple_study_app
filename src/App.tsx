import React from "react";
import "./App.css";
import { Study } from "./Study";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Study />
    </ChakraProvider>
  );
}

export default App;
