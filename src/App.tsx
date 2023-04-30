import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/theme";
import { RouterContainer } from "./router/Routes";

import "./App.css";

export const App: React.FC = () => {
    
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <RouterContainer />
            </BrowserRouter>
        </ChakraProvider>
    );
};
