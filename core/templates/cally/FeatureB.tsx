import phone_dark from "/public/templates/cally/phone_dark.png";
import phone_light from "/public/templates/cally/phone_light.png";

import {ExtendedFAB} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {useTheme} from "next-themes";

function FeatureB() {
    const {resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case "light":
            src = phone_light;
            break;
        case "dark":
            src = phone_dark;
            break;
    }

    return (
        <>
            <section className="z-10 flex flex-col gap-[16px] p-[16px] pt-[48px] md:pt-[0px]">
                <div className="flex flex-col items-center gap-[48px] rounded-extra-large bg-surface-container p-[24px] pb-0 sm:flex-row  sm:gap-[24px] md:gap-[48px] md:px-[36px] lg:gap-[64px] lg:px-[150px]">
                    <div className="order-last flex min-h-[460px] w-full items-end sm:order-first md:order-none lg:basis-2/5 xl:basis-1/3">
                        <Img
                            src={src}
                            color="bg-none"
                            aspect={523 / 692}
                            objectFit={"contain"}
                            className={"items-end"}
                        />
                    </div>
                    <div className="order-first flex w-full flex-col justify-end gap-[12px] pb-[12px] sm:order-last md:order-none lg:basis-3/5 xl:basis-2/3">
                        <h2 className="text-headline-large font-bold lg:text-display-medium lg:font-bold">
                            The genius way to work{" "}
                            <span className="text-on-surface-variant">
                                better and smarter
                            </span>
                        </h2>{" "}
                        <p className="flex flex-col gap-[8px] text-body-large">
                            <span>
                                Cally makes it easy to work smarter when you’re
                                working solo.
                            </span>
                            <span>
                                Meetings, sessions, and appointments become more
                                efficient ways to achieve success and accomplish
                                goals.
                            </span>
                        </p>
                        <ExtendedFAB
                            text="Explore platform"
                            variant={"surface"}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export {FeatureB};
