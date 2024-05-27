import phones_dark from "/public/templates/cally/phones_dark.png";
import phones_light from "/public/templates/cally/phones_light.png";

import {ExtendedFAB} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {useTheme} from "next-themes";
import {MdAdd} from "react-icons/md";

function Hero() {
    const {resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case "light":
            src = phones_light;
            break;
        case "dark":
            src = phones_dark;
            break;
    }

    return (
        <>
            <main className="relative flex min-h-[600px] w-full flex-col items-center overflow-x-clip sm:min-h-[700px] sm:flex-row">
                <div className="z-10 order-last mt-[-140px] flex  w-full animate-transition-left flex-col px-[16px] sm:mt-[240px] sm:w-4/5 md:mt-[60px] md:w-4/5 lg:order-none lg:w-3/5">
                    <h1 className="text-display-large font-bold leading-tight text-on-surface sm:leading-tight md:text-[84px]">
                        Easy <br /> planning <br /> with{" "}
                        <span className="text-zinc-400">Cally</span>
                    </h1>
                    <p className="pt-[12px] text-body-large text-on-surface lg:w-4/5">
                        <strong>Cally</strong> is your hub for planning meetings
                        professionally and efficiently, eliminating the hassle
                        of back-and-forth emails so you can get back to work.
                    </p>
                    <div className="flex flex-wrap items-center justify-start gap-[24px] pb-[24px] pt-[24px]">
                        <ExtendedFAB
                            icon={<MdAdd size={24} />}
                            text="Sign up to waiting list"
                            variant="surface"
                        />
                        <ExtendedFAB
                            className={""}
                            text="More Info"
                            variant={"secondary"}
                        />
                    </div>
                </div>
                <div className="pointer-events-none order-first mt-[-40px] flex h-[400px] w-full sm:absolute sm:order-none sm:mt-[0px] sm:h-fit sm:scale-110 md:mt-[60px] lg:mt-[160px] xl:mt-[160px]">
                    <Img
                        src={src}
                        className="pointer-events-none top-[0] z-0 h-[400px] w-[700px] sm:top-[-100px] sm:h-[600px] sm:w-[900px] md:right-[-240px] md:top-[-60px] md:h-[900px] md:w-[1400px]"
                        color={"bg-none"}
                        objectFit="contain"
                    />
                </div>
            </main>
        </>
    );
}

export {Hero};
