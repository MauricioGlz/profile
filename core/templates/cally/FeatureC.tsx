import google_calendar from "/public/logos/productivity/g_calendar.svg";
import jira from "/public/logos/productivity/jira.svg";
import outlook from "/public/logos/productivity/ms_outlook.svg";
import zapier from "/public/logos/productivity/zapier.svg";

import {ExtendedFAB} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {MdApps} from "react-icons/md";

function FeatureC() {
    return (
        <section className="z-10 flex flex-col gap-[24px] p-[16px] pt-[48px] md:pt-[0px] lg:flex-row">
            {/*Cards*/}
            <div className="flex w-full flex-col items-center justify-center gap-[16px]">
                <div className="flex w-full flex-col gap-[16px] md:flex-row">
                    <div className="flex w-full  flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            <Img
                                size={48}
                                color={"bg-inherit"}
                                objectFit={"fill"}
                                src={google_calendar}
                                className="hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Google Calendar
                            </h3>
                            <p className="text-body-large">
                                Convert customers into engaged advocates.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            <Img
                                size={48}
                                color={"bg-inherit"}
                                objectFit={"fill"}
                                src={jira}
                                className="hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Custom code
                            </h3>
                            <p className="text-body-large">
                                Convert customers into engaged advocates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-[16px] md:flex-row">
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            <Img
                                size={48}
                                color={"bg-inherit"}
                                objectFit={"fill"}
                                src={outlook}
                                className="hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Microsoft Outlook
                            </h3>
                            <p className="text-body-large">
                                Convert customers into engaged advocates.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            <Img
                                size={48}
                                color={"bg-inherit"}
                                objectFit={"fill"}
                                src={zapier}
                                className="hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Zapier
                            </h3>
                            <p className="text-body-large">
                                Convert customers into engaged advocates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Text*/}
            <div className="flex w-full basis-1/2 flex-col justify-center gap-[12px] p-[12px] px-[24px] pb-[12px] sm:order-last md:order-none lg:basis-3/5 xl:basis-2/3">
                <h2 className="text-headline-large font-bold lg:text-display-medium lg:font-bold">
                    Multiple{" "}
                    <span className="text-on-surface-variant">calendars</span>
                </h2>{" "}
                <p className="flex flex-col gap-[8px] text-body-large lg:w-4/5">
                    <span>
                        Cally connects with Google, Outlook, Microsoft Office
                        and iCal, automating the scheduling process from start
                        to finish.
                    </span>
                    <span>
                        Scheduled meetings are added directly to the host and
                        invitee calendars, removing any unnecessary steps in
                        between.
                    </span>
                </p>
                <ExtendedFAB
                    text="View all apps"
                    icon={<MdApps size={24} />}
                    variant={"surface"}
                />
            </div>
        </section>
    );
}

export {FeatureC};
