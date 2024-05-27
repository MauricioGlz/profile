import React, {ReactNode, useState} from "react";

import Link from "next/link";

import me_logo from "/public/material-me/me_logo.svg";

import {
    Button,
    Chips,
    Divider,
    IconButton,
    NavigationDrawerIn,
    NavigationDrawerOut,
    OnIconBadge,
    ToggleTheme,
} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {MdMenu, MdMenuOpen} from "react-icons/md";

interface NavigationProps {
    children: ReactNode;
}

const NavigationCally = ({children}: NavigationProps) => {
    const [showDrawer, setShowDrawer] = useState(false);

    function onClose() {
        setShowDrawer(false);
    }

    return (
        <>
            <nav className="flex h-[64px] w-full flex-row items-center justify-between px-[12px] py-[12px]">
                <div className="flex w-full flex-row items-center gap-[12px]">
                    <IconButton
                        icon={<MdMenu size={24} />}
                        variant={"standard"}
                        className={"rounded-extra-large"}
                        onClick={() => setShowDrawer(true)}
                    />
                    <Img
                        src={me_logo}
                        width={30}
                        height={22}
                        color="bg-none"
                    />

                    <p className="hidden font-bold sm:flex">Cally</p>
                </div>
                <ul className="hidden w-full justify-center gap-[24px] text-label-large lg:flex">
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Individuals</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Teams</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <div className="relative w-fit rounded-lg">
                            <Link href="#">Enterprise</Link>
                            <div className="absolute right-0 top-0 flex items-center justify-center">
                                <OnIconBadge className="animate-fade-in" />
                            </div>
                        </div>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
                        <Link href="#">Product</Link>
                    </li>
                    <li className="rounded-small  px-[12px] py-[8px] hover:underline hover:decoration-[1.5px] hover:underline-offset-[2px] ">
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

            {children}

            {/*NAV DRAWER OUT*/}
            <NavigationDrawerOut
                isVisible={showDrawer}
                onClose={() => setShowDrawer(false)}
                className={"pb-[24px] pt-[12px]"}>
                <IconButton
                    icon={<MdMenuOpen size={24} />}
                    variant={"tonal"}
                    onClick={() => setShowDrawer(false)}
                    className={"rounded-extra-large"}
                />

                <Divider />

                <NavigationDrawerIn.Item
                    leftElement={
                        <Img
                            width={24}
                            height={24}
                            color={"opacity-100"}
                            objectFit={"fill"}
                            src={me_logo}
                        />
                    }
                    key={"1"}
                    url={"/"}
                    label={"MaterialMe"}
                    rightElement={<Chips text={"Beta"} />}
                />

                <NavigationDrawerIn.Item
                    key={"2"}
                    url={"/docs/installation"}
                    label={"Installation"}
                />

                <NavigationDrawerIn.Item
                    key={"3"}
                    url={"/docs/faq"}
                    label={"FAQ"}
                />

                <Divider />
                <ToggleTheme
                    label
                    className="px-[16px]"
                />
            </NavigationDrawerOut>
        </>
    );
};

export default NavigationCally;
