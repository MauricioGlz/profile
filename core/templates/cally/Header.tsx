import React from "react";

import Link from "next/link";

import me_logo from "/public/material-me/me_logo.svg";

import {Button, IconButton, OnIconBadge} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {MdMenu} from "react-icons/md";

function Header() {
    return (
        <nav className="flex h-[64px] w-full flex-row items-center justify-between px-[12px] py-[12px] md:px-[32px]">
            <div className="flex w-full flex-row items-center gap-[12px]">
                <IconButton
                    icon={<MdMenu size={24} />}
                    variant={"standard"}
                    className={"rounded-extra-large"}
                />
                <Img
                    src={me_logo}
                    size={36}
                    color="bg-none"
                />

                <p className="hidden font-bold sm:flex">Cally</p>
            </div>
            <ul className="hidden w-full justify-center gap-[24px] text-label-large lg:flex">
                <li className="rounded-small bg-surface-container px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]">
                    <Link href="#">Individuals</Link>
                </li>
                <li className="rounded-small bg-surface-container px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]">
                    <Link href="#">Teams</Link>
                </li>
                <li className="rounded-small bg-surface-container px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]">
                    <div className="relative w-fit rounded-lg">
                        <Link href="#">Enterprise</Link>
                        <div className="absolute right-0 top-0 flex items-center justify-center">
                            <OnIconBadge className="animate-fade-in" />
                        </div>
                    </div>
                </li>
                <li className="rounded-small bg-surface-container px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]">
                    <Link href="#">Product</Link>
                </li>
                <li className="rounded-small bg-surface-container px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px]">
                    <Link href="#">Pricing</Link>
                </li>
            </ul>
            <div className="flex w-full flex-row items-center justify-end gap-[12px] sm:min-w-[240px]">
                <Button
                    text={"Sign In"}
                    variant={"text"}
                    className={"rounded-extra-large"}
                />{" "}
                <Button
                    text={"Get Started"}
                    variant={"filled"}
                    className={"rounded-extra-large"}
                />
            </div>
        </nav>
    );
}

export {Header};
