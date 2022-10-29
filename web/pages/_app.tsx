import type { AppProps } from 'next/app'

// Styles
import "@core/styles/globals.scss";
import "@core/styles/normalize.css";
import "@core/styles/chakra.scss";
import "@core/styles/forms.scss";
import "react-untitled-ui/dist/esm/index.css";
import "@core/styles/untitled-ui.scss";
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { store } from "@redux/store"
import { Provider as ReduxProvider } from "react-redux";

// React query
import { queryClient } from "@core/utils";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// React toastify
import { ToastContainer } from "react-toastify";
import { useAuthRestrictedRoutes } from "@router/use-auth-restricted-routes";

function MyApp({Component, pageProps}: AppProps) {
    useAuthRestrictedRoutes()
    
    return <ReduxProvider store={ store }>
        <QueryClientProvider client={ queryClient }>
                <Hydrate state={ pageProps.dehydratedState }>
                    <Component { ...pageProps } />
                </Hydrate>
            <ReactQueryDevtools position="bottom-right" initialIsOpen={ false }/>
        </QueryClientProvider>
        <ToastContainer/>
    </ReduxProvider>
}

export default MyApp