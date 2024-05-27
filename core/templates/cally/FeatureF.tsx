import phone_single2_dark from "/public/templates/cally/phone_single2_dark.png";

import {ExtendedFAB} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";

function FeatureF() {
    return (
        <section className="z-10 flex flex-col gap-[24px] p-[16px] pt-[48px] md:pt-[0px] lg:flex-row">
            {/*Card*/}
            <div className="flex w-full flex-col items-center justify-center gap-[16px] lg:order-last">
                <div className="flex w-full flex-col md:flex-row">
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container px-[24px] pt-[48px]">
                        <Img
                            width={"100%"}
                            height={400}
                            color={"bg-none"}
                            objectFit={"contain"}
                            src={phone_single2_dark}
                            unoptimized={true}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            {/*Text*/}
            <div className="flex w-full basis-1/2 flex-col justify-center gap-[12px] p-[12px] px-[24px] pb-[12px] sm:order-last md:order-none lg:basis-3/5 lg:text-right xl:basis-2/3">
                <h2 className="text-headline-large font-bold lg:text-display-medium lg:font-bold">
                    Delight invitees with{" "}
                    <span className="text-blue-400">modern</span> scheduling
                </h2>{" "}
                <p className="flex flex-col gap-[8px] text-body-large">
                    Time is a precious commodity. Cally is the courteous way to
                    book meetings and other appointments, because scheduling
                    with just a few clicks makes the most of everyone&apos;s
                    time.
                </p>
                <div className="flex flex-row gap-[12px] lg:justify-end">
                    <ExtendedFAB
                        text="Try now"
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

export {FeatureF};
