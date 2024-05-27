import {useRouter} from "next/router";

import {Button} from "@/core/ui/components";
import ToggleThemeMenu from "@/core/ui/components/toggle-theme/ToggleThemeMenu";
import {ThemeProvider} from "next-themes";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <ThemeProvider
                defaultTheme="dark"
                attribute="class">
                <main className="flex h-screen flex-col items-center justify-center gap-[24px] px-[24px] text-center">
                    <span className="flex w-full items-center justify-center gap-[12px]">
                        <Button
                            variant="tonal"
                            text="Cally"
                            onClick={() => router.push("/templates/cally")}
                        />
                        <Button
                            variant="tonal"
                            text="Dashboard"
                            onClick={() => router.push("/templates/dashboard")}
                        />
                        <span>
                            <ToggleThemeMenu />
                        </span>
                    </span>
                    👋 Hi, examples of components for copying can be found in
                    the &apos;examples/name&apos;
                </main>
            </ThemeProvider>
        </>
    );
}
