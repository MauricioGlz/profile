import React from "react";

import Link from "next/link";

import materialDark from "/public/templates/cally/screen_dark.png";
import materialLight from "/public/templates/cally/screen_light.png";

import {Icon, Img} from "@/core/ui/elements";
import {useTheme} from "next-themes";
import {MdPlayArrow} from "react-icons/md";

function FooterA() {
    const {resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case "light":
            src = materialLight;
            break;
        case "dark":
            src = materialDark;
            break;
    }

    return (
        <footer className="flex flex-col gap-[12px] px-[16px] pt-[64px] lg:flex-row">
            <div className="flex min-h-[240px] w-full min-w-[330px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container p-[24px]">
                <h4 className="px-[12px] text-title-medium font-bold text-on-surface">
                    Explore other solutions for your business
                </h4>
                <div className="relative h-full w-full rounded-extra-large p-[12px]  ">
                    <Img
                        src={src}
                        aspect={1713 / 913}
                        objectFit={"contain"}
                        color="bg-none"
                    />
                    <button className="/40 absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-200/20 backdrop-blur-lg hover:bg-zinc-300/20 dark:hover:bg-zinc-800/50 md:h-[88px] md:w-[88px]">
                        <Icon icon={<MdPlayArrow size={48} />} />
                    </button>
                </div>
            </div>
            <div className="flex min-h-[240px] w-full items-center justify-center rounded-extra-large p-[24px]">
                <div className="p-[12px]">
                    <ul className="flex w-full min-w-max flex-col justify-center gap-[24px] text-center text-body-medium text-on-surface-variant lg:flex">
                        <h4 className="text-title-medium font-bold text-on-surface">
                            About
                        </h4>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">About Cally</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]  ">
                            <Link href="#">Contact Sales</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Newsroom</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Security</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex min-h-[240px] w-full items-center justify-center rounded-extra-large p-[24px]">
                <div className="p-[12px]">
                    <ul className="flex w-full min-w-max flex-col justify-center gap-[24px] text-center text-body-medium text-on-surface-variant lg:flex">
                        <h4 className="text-title-medium font-bold text-black text-on-surface">
                            Solutions
                        </h4>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Calendar</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Task Manager</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">NFT Marketplace</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex min-h-[240px] w-full items-center justify-center rounded-extra-large p-[24px]">
                <div className="p-[12px]">
                    <ul className="flex w-full min-w-max flex-col justify-center gap-[24px] text-center text-body-medium text-on-surface-variant lg:flex">
                        <h4 className="text-title-medium font-bold text-black text-on-surface">
                            Popular Features
                        </h4>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Material Me</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Responsive</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Availability</Link>
                        </li>
                        <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                            <Link href="#">Templates</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export {FooterA};
