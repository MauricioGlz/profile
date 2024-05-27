import phone_dark_fe from "/public/templates/cally/phone-dark-fe.png";
import phone_single_dark from "/public/templates/cally/phone_single_dark.png";

import {ExtendedFAB} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {useTheme} from "next-themes";

function FeatureE() {
    // const {theme, setTheme} = useTheme();

    const {resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case "light":
            src = phone_dark_fe;
            break;
        case "dark":
            src = phone_single_dark;
            break;
    }

    return (
        <section className="z-10 flex flex-col gap-[24px] p-[16px] pt-[48px] md:pt-[0px] lg:flex-row">
            {/*Card*/}
            <div className="flex w-full flex-col items-center justify-center gap-[16px]">
                <div className="flex w-full flex-col md:flex-row">
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container px-[24px] py-[48px]">
                        <Img
                            width={"100%"}
                            height={400}
                            color={"bg-none"}
                            objectFit={"contain"}
                            src={src}
                            unoptimized={true}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            {/*Text*/}
            <div className="flex w-full basis-1/2 flex-col justify-center gap-[12px] p-[12px] px-[24px] pb-[12px] sm:order-last md:order-none lg:basis-3/5 xl:basis-2/3">
                <h2 className="text-headline-large font-bold lg:text-display-medium lg:font-bold">
                    {resolvedTheme === "dark" ? "Light theme" : "Dark theme"}{" "}
                    <span className="text-emerald-400">included</span>
                </h2>{" "}
                <p className="flex flex-col gap-[8px] text-body-large lg:w-4/5">
                    <span>
                        Get instant access to all of these features and more, so
                        you can plan meetings without the back-and-forth.
                    </span>
                </p>
                <div className="flex flex-row gap-[12px]">
                    <ExtendedFAB
                        text="Get Preview"
                        variant={"surface"}
                    />
                    <ExtendedFAB
                        text="More info"
                        variant={"secondary"}
                    />
                </div>
            </div>
        </section>
    );
}

export {FeatureE};
