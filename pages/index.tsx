import { useRouter } from "next/router";
import { outfit } from "./ui/fonts";
import { Blob, Button } from "@/core/ui/components";
import ToggleThemeMenu from "@/core/ui/components/toggle-theme/ToggleThemeMenu";
import { ThemeProvider } from "next-themes";
import AppIcon from "@/core/ui/components/app-icon/AppIcon";

export default function Home() {
    const router = useRouter();
    const appIconsData = [
        { imageUrl: '/apps/TX2_Y.png', boldText: 'TAXI 2.0', normalText: 'Android' },
        { imageUrl: '/apps/TX2_B.png', boldText: 'TAXI 2.0', normalText: 'Web' },
        { imageUrl: '/apps/VD.png', boldText: 'Configurator', normalText: 'Windows' },
        { imageUrl: '/apps/Ciudadania.png', boldText: 'Ciudadania', normalText: 'Android' },
        { imageUrl: '/apps/Potentor.png', boldText: 'Potentor', normalText: 'Web' },
        { imageUrl: '', boldText: 'Reports', normalText: 'Web' },
        { imageUrl: '', boldText: 'Title 7', normalText: 'Description 7' },
        { imageUrl: '', boldText: 'Title 8', normalText: 'Description 8' },
        { imageUrl: '', boldText: 'Title 9', normalText: 'Description 9' },
        { imageUrl: '', boldText: 'Title 10', normalText: 'Description 10' }
    ]

    return (
        <ThemeProvider
            defaultTheme="light"
            attribute="class">
            <main className={`flex h-screen flex-col items-center justify-center gap-[24px] px-[24px] text-center ${outfit.className}`}>
                <div>👋 Hi, welcome to</div>
                <div className="text-center text-5xl text-sky-800">Mauricio's portolio</div>

                <section id="apps" className="mt-30">
                    <div className="grid grid-cols-5 gap-4">
                        {appIconsData.map((card, index) => (
                            <AppIcon
                                imageUrl={card.imageUrl}
                                boldText={card.boldText}
                                normalText={card.normalText}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </ThemeProvider>
    )
}