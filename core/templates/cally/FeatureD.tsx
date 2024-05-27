import asana from "/public/logos/productivity/asana.svg";
import basecamp from "/public/logos/productivity/basecamp.svg";
import confluence from "/public/logos/productivity/confluence.svg";
import dropbox from "/public/logos/productivity/dropbox.svg";
import google_calendar from "/public/logos/productivity/g_calendar.svg";
import google_meet from "/public/logos/productivity/google_meet.svg";
import intercom from "/public/logos/productivity/intercom.svg";
import jira from "/public/logos/productivity/jira.svg";
import jira_service_desk from "/public/logos/productivity/jira_service_desk.svg";
import mailchimp from "/public/logos/productivity/mailchimp.svg";
import ms_onedrive from "/public/logos/productivity/ms_onedrive.svg";
import trello from "/public/logos/productivity/trello.svg";

import {LinkBox} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";

function FeatureD() {
    return (
        <section className="pb-16px relative z-10 flex flex-col gap-[24px] p-[16px] pt-[24px] md:pt-[0px]">
            {/*Text*/}
            <div className="flex w-full flex-col justify-center gap-[24px] rounded-extra-large bg-surface-container p-[12px] px-[64px] py-[140px] text-center">
                <div className="absolute  left-[84px] top-[44px]">
                    <Img
                        size={110}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={google_calendar}
                        className="-rotate-[10deg] transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="absolute right-[64px] top-[64px] transition-all duration-1000 lg:right-[290px]">
                    <Img
                        size={70}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={jira_service_desk}
                        className="rotate-[10deg] transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="absolute left-[36px] top-[180px] lg:left-[140px]">
                    <Img
                        size={56}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={google_meet}
                        className="rotate-[10deg] transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="absolute bottom-[86px] left-[99px]">
                    <Img
                        size={48}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={intercom}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="absolute bottom-[48px] right-[84px] lg:right-[284px]">
                    <Img
                        size={70}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={mailchimp}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="absolute right-[48px] top-[190px]">
                    <Img
                        size={48}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={confluence}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute right-[184px] top-[60px] md:visible">
                    <Img
                        size={48}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={basecamp}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute bottom-[50px] left-[220px] md:visible lg:left-[360px]">
                    <Img
                        size={84}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={asana}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute bottom-[90px] left-1/2 md:visible">
                    <Img
                        size={48}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={trello}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute bottom-[120px] right-[180px] md:visible">
                    <Img
                        size={60}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={dropbox}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute right-[124px] top-[130px] md:visible">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={ms_onedrive}
                        className="transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <div className="invisible absolute left-[244px] top-[60px] md:visible lg:left-[300px]">
                    <Img
                        size={58}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={jira}
                        className="-rotate-[10deg] transition-all duration-1000 hover:scale-105"
                    />
                </div>
                <h2 className="text-headline-large font-bold lg:text-display-medium lg:font-bold">
                    Compatible with apps
                </h2>
                <p className="gap-[8px] text-body-large">
                    Get instant access to all of these features and more, so you
                    can plan meetings without the back-and-forth.
                    <br />
                    <span>
                        <LinkBox
                            href="#"
                            size="text-body-large font-bold">
                            More info 🚀
                        </LinkBox>
                    </span>
                </p>
            </div>
        </section>
    );
}

export {FeatureD};
