import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "@core/styles/globals.scss";
import "@core/styles/normalize.css";
import "@core/styles/chakra.scss";
import "@core/styles/forms.scss";
import "react-untitled-ui/dist/esm/index.css";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "@redux/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ReduxProvider>
            <QueryClientProvider client={ queryClient }>
                <ChakraProvider theme={ theme }>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ChakraProvider>
                <ReactQueryDevtools position="bottom-right" initialIsOpen={false}/>
            </QueryClientProvider>
        </ReduxProvider>
    </React.StrictMode>
);