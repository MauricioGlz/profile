import React from "react";

import Link from "next/link";

import facebook from "/public/logos/networks/facebook.svg";
import instagram from "/public/logos/networks/instagram.svg";
import linkedin from "/public/logos/networks/linkedin.svg";
import snapchat from "/public/logos/networks/snapchat.svg";
import twitter from "/public/logos/networks/twitter.svg";

import {OnIconBadge} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";

function FooterB() {
    return (
        <footer className="flex w-full flex-col items-center justify-between gap-[12px] p-[12px] lg:flex-row">
            <div className="flex w-full flex-wrap justify-center gap-[24px] p-[12px] lg:order-last lg:justify-end">
                <Link href="#">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={facebook}
                        className="hover:scale-105"
                    />
                </Link>
                <Link href="#">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={twitter}
                        className="hover:scale-105"
                    />
                </Link>
                <Link href="#">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={snapchat}
                        className="hover:scale-105"
                    />
                </Link>
                <Link href="#">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={linkedin}
                        className="hover:scale-105"
                    />
                </Link>

                <Link href="#">
                    <Img
                        size={36}
                        color={"bg-inherit"}
                        objectFit={"fill"}
                        src={instagram}
                        className="hover:scale-105"
                    />
                </Link>
            </div>
            <div className="p-[12px] lg:order-first">
                <ul className="flex flex-wrap justify-center gap-[24px] text-label-large text-on-surface-variant sm:min-w-max lg:flex">
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Terms</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Privacy</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <div className="relative w-fit rounded-lg">
                            <Link href="#">Refunds</Link>
                            <div className="absolute right-0 top-0 flex items-center justify-center">
                                <OnIconBadge className="animate-fade-in" />
                            </div>
                        </div>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Contact Us</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Feedback</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export {FooterB};
