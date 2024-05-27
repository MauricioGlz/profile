import {useEffect, useState} from "react";

import Head from "next/head";

import {
    Banner,
    FeatureA,
    FeatureB,
    FeatureC,
    FeatureD,
    FeatureE,
    FeatureF,
    FooterA,
    FooterB,
    Hero,
    Price,
} from "@/core/templates";
import NavigationCally from "@/core/templates/cally/layouts/NavigationCally";
import {ThemeProvider} from "next-themes";

export default function Cally() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Cally | Material Me React Library</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
                />
                <meta
                    content="Cally"
                    name="Landing page"
                />
            </Head>
            <ThemeProvider defaultTheme="dark">
                <NavigationCally>
                    <section className="bg-surface">
                        <Banner />
                        <Hero />
                        <FeatureA />
                        <FeatureB />
                        <FeatureC />
                        <FeatureD />
                        <FeatureE />
                        <FeatureF />
                        <Price />
                        <FooterA />
                        <FooterB />
                    </section>
                </NavigationCally>
            </ThemeProvider>
        </>
    );
}
