import type {AppProps} from "next/app";

import "@/styles/globals.css";

import {ThemeProvider} from "next-themes";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            themes={["dark", "light", "slate", "neutral"]}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
