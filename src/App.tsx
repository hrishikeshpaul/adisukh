import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/theme";
import { RouterContainer } from "./router/Routes";

import "aos/dist/aos.css";
import "./App.css";

export const App: React.FC = () => {
    React.useEffect(() => {
        AOS.init({
            once: true,
            // startEvent: "load",
        });
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <RouterContainer />
            </BrowserRouter>
        </ChakraProvider>
    );
};
