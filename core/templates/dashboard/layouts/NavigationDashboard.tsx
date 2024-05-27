import React, {FC, ReactNode, useState} from "react";

import Link from "next/link";
import {useRouter} from "next/router";

import reactIcon from "/public/logos/code/react.svg";
import figma_logo from "/public/logos/design/figma.svg";
import me_logo from "/public/material-me/me_logo.svg";

import {
    Avatar,
    Button,
    Divider,
    IconButton,
    List,
    NavigationDrawerIn,
    NavigationDrawerOut,
    OverflowMenu,
    Search,
    SearchInput,
    ToggleTheme,
} from "@/core/ui/components";
import {SideSheet} from "@/core/ui/components/sheets/SideSheet";
import {Img} from "@/core/ui/elements";
import {
    MdAreaChart,
    MdClose,
    MdDashboard,
    MdMenu,
    MdMenuOpen,
    MdMoreVert,
    MdOutlineNotifications,
    MdSearch,
} from "react-icons/md";

interface NavigationLayoutProps {
    children: ReactNode;
}

const NavigationDashboard: FC<NavigationLayoutProps> = ({
    children,
}: NavigationLayoutProps) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showSideSheet, setShowSideSheet] = useState(false);
    const [showSideSheet2, setShowSideSheet2] = useState(false);

    const router = useRouter();

    function onClose() {
        setShowDrawer(false);
        setShowSideSheet(false);
    }

    return (
        <>
            {/*HEADER*/}
            <div
                className={`top-[0px] z-40 flex w-full flex-row justify-between gap-[16px] px-[12px] py-[12px] sm:px-[26px]`}>
                <IconButton
                    icon={<MdMenu size={24} />}
                    variant={"tonal"}
                    onClick={() => setShowDrawer(true)}
                    className={"rounded-extra-large lg:hidden"}
                />
                <Img
                    size={40}
                    color={"opacity-100"}
                    objectFit={"fill"}
                    src={me_logo}
                    className="sm:flex"
                    onClick={() => router.push("/")}
                />
                <div className="flex w-full flex-row items-center justify-end gap-[12px]">
                    <div className="flex flex-row gap-[6px]">
                        <IconButton
                            icon={<MdSearch size={22} />}
                            onClick={() => setShowSideSheet2(true)}
                            variant={"standard"}
                            className={"rounded-extra-large"}
                        />
                        <IconButton
                            icon={<MdOutlineNotifications size={22} />}
                            onClick={() => setShowSideSheet(true)}
                            variant={"standard"}
                            className={"rounded-extra-large"}
                        />
                    </div>
                    <Avatar
                        src={
                            "https://images.unsplash.com/photo-1578297691831-665468f1a738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />

                    <OverflowMenu
                        bottomRight
                        menu={
                            <>
                                <Link
                                    href={
                                        "https://felixco.gumroad.com/l/material-me"
                                    }
                                    passHref={true}
                                    target="_blank">
                                    <OverflowMenu.Item
                                        label={"Design System"}
                                        rightElement={
                                            <Img
                                                size={18}
                                                color={"bg-inherit"}
                                                objectFit={"fill"}
                                                src={figma_logo}
                                            />
                                        }
                                    />
                                </Link>
                                <Link
                                    href={
                                        "https://felixco.gumroad.com/l/materialme-code"
                                    }
                                    passHref={true}
                                    target="_blank">
                                    <OverflowMenu.Item
                                        label={"React Components"}
                                        rightElement={
                                            <Img
                                                size={18}
                                                color={"bg-inherit"}
                                                objectFit={"fill"}
                                                src={reactIcon}
                                            />
                                        }
                                    />
                                </Link>
                            </>
                        }>
                        <IconButton
                            icon={<MdMoreVert size={22} />}
                            variant={"standard"}
                            className={"rounded-extra-large"}
                        />
                    </OverflowMenu>
                </div>
            </div>

            {/*NAVIGATION DRAWER IN + APP*/}
            <div className="gap-[0px] sm:flex sm:w-full sm:flex-row">
                <div
                    className={`hidden lg:flex ${
                        router.asPath === "/" ? "sm:hidden" : ""
                    }`}>
                    <NavigationDrawerIn
                        isVisible
                        className="top-4 pt-0">
                        <NavigationDrawerIn.Item
                            key={"1"}
                            leftElement={<MdDashboard size={18} />}
                            url={"/templates/dashboard"}
                            label={"Dashboard"}
                        />

                        <NavigationDrawerIn.Item
                            key={"2"}
                            leftElement={<MdAreaChart size={18} />}
                            url={"/templates/dashboard/charts"}
                            label={"Charts"}
                        />

                        {/*<NavigationDrawerIn.Item*/}
                        {/*  key={"3"}*/}
                        {/*  leftElement={<MdSwapHoriz size={18} />}*/}
                        {/*  url={"/templates/dashboard/exchange"}*/}
                        {/*  label={"Exchange"}*/}
                        {/*  rightElement={<MdCodeOff size={18} />}*/}
                        {/*/>*/}

                        {/*<NavigationDrawerIn.Item*/}
                        {/*  key={"4"}*/}
                        {/*  leftElement={<MdGamepad size={18} />}*/}
                        {/*  url={"/templates/dashboard/gamefi"}*/}
                        {/*  label={"GameFi"}*/}
                        {/*  rightElement={<MdCodeOff size={18} />}*/}
                        {/*/>*/}

                        {/*<NavigationDrawerIn.Item*/}
                        {/*  key={"5"}*/}
                        {/*  leftElement={<MdSupervisedUserCircle size={18} />}*/}
                        {/*  url={"/templates/dashboard/refferal"}*/}
                        {/*  label={"Referral program"}*/}
                        {/*  rightElement={<MdCodeOff size={18} />}*/}
                        {/*/>*/}

                        {/*<NavigationDrawerIn.Item*/}
                        {/*  key={"6"}*/}
                        {/*  leftElement={<MdSettings size={18} />}*/}
                        {/*  url={"/templates/dashboard/settings"}*/}
                        {/*  label={"Settings"}*/}
                        {/*  rightElement={<MdCodeOff size={18} />}*/}
                        {/*/>*/}

                        <Divider />
                        <div className="flex w-full flex-row items-center justify-between px-[16px] py-[8px]">
                            <p className="flex text-body-medium">
                                Get all-access
                            </p>
                            <OverflowMenu
                                topRight
                                menu={
                                    <>
                                        <Link
                                            href={
                                                "https://felixco.gumroad.com/l/material-me"
                                            }
                                            passHref={true}
                                            target="_blank">
                                            <OverflowMenu.Item
                                                label={"Design System"}
                                                rightElement={
                                                    <Img
                                                        size={18}
                                                        color={"bg-inherit"}
                                                        objectFit={"fill"}
                                                        src={figma_logo}
                                                    />
                                                }
                                            />
                                        </Link>
                                        <Link
                                            href={
                                                "https://felixco.gumroad.com/l/materialme-code"
                                            }
                                            passHref={true}
                                            target="_blank">
                                            <OverflowMenu.Item
                                                label={"React Components"}
                                                rightElement={
                                                    <Img
                                                        size={18}
                                                        color={"bg-inherit"}
                                                        objectFit={"fill"}
                                                        src={reactIcon}
                                                    />
                                                }
                                            />
                                        </Link>
                                    </>
                                }>
                                <Button
                                    text={"Buy"}
                                    variant={"tonal"}
                                />
                            </OverflowMenu>
                        </div>
                        <ToggleTheme
                            label
                            className="px-[16px]"
                        />
                    </NavigationDrawerIn>
                </div>

                <div className="mb-[24px] sm:flex sm:w-full sm:flex-col sm:overflow-x-auto">
                    {children}
                </div>
            </div>

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

                <NavigationDrawerOut.Item
                    key={"1"}
                    leftElement={<MdDashboard size={18} />}
                    url={"/templates/dashboard"}
                    label={"Dashboard"}
                />

                <NavigationDrawerOut.Item
                    key={"2"}
                    leftElement={<MdAreaChart size={18} />}
                    url={"/templates/dashboard/charts"}
                    label={"Charts"}
                />

                {/*<NavigationDrawerOut.Item*/}
                {/*  key={"3"}*/}
                {/*  leftElement={<MdSwapHoriz size={18} />}*/}
                {/*  url={"/templates/dashboard/exchange"}*/}
                {/*  label={"Exchange"}*/}
                {/*  rightElement={<MdCodeOff size={18} />}*/}
                {/*/>*/}

                {/*<NavigationDrawerOut.Item*/}
                {/*  key={"4"}*/}
                {/*  leftElement={<MdGamepad size={18} />}*/}
                {/*  url={"/templates/dashboard/gamefi"}*/}
                {/*  label={"GameFi"}*/}
                {/*  rightElement={<MdCodeOff size={18} />}*/}
                {/*/>*/}

                {/*<NavigationDrawerOut.Item*/}
                {/*  key={"5"}*/}
                {/*  leftElement={<MdSupervisedUserCircle size={18} />}*/}
                {/*  url={"/templates/dashboard/refferal"}*/}
                {/*  label={"Referral program"}*/}
                {/*  rightElement={<MdCodeOff size={18} />}*/}
                {/*/>*/}

                {/*<NavigationDrawerOut.Item*/}
                {/*  key={"6"}*/}
                {/*  leftElement={<MdSettings size={18} />}*/}
                {/*  url={"/templates/dashboard/settings"}*/}
                {/*  label={"Settings"}*/}
                {/*  rightElement={<MdCodeOff size={18} />}*/}
                {/*/>*/}

                <Divider />
                <ToggleTheme
                    label
                    className="px-[16px]"
                />
            </NavigationDrawerOut>

            {/*SIDE SHEETS*/}
            <SideSheet
                isVisible={showSideSheet2}
                onClose={() => setShowSideSheet2(false)}>
                <SearchInput
                    type={"text"}
                    name={"search"}
                    placeholder={"Search"}
                    leftElement={<MdSearch size={24} />}
                    rightElement={
                        <IconButton
                            icon={<MdClose size={24} />}
                            variant="standard"
                            className={"p-[2px]"}
                            onClick={() => setShowSideSheet2(false)}
                        />
                    }
                />
            </SideSheet>

            <SideSheet
                isVisible={showSideSheet}
                onClose={() => setShowSideSheet(false)}
                closeButton={true}
                title={"Notifications"}>
                <Divider />
                <List
                    leftElement={
                        <Avatar
                            size={48}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1678553370169-b4f5a88603ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            }
                        />
                    }
                    rightElement={
                        <Img
                            width={56}
                            height={48}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            }
                        />
                    }
                    width={"w-full"}
                    label={"2h ago"}
                    headline={"Lily"}
                    body={"Add Backpack.img to Files"}
                />
                <List
                    leftElement={
                        <Avatar
                            size={48}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                            }
                        />
                    }
                    rightElement={
                        <Avatar
                            size={40}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1678634033564-cac302dcf4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            }
                        />
                    }
                    width={"w-full"}
                    label={"3h ago"}
                    headline={"Helen"}
                    body={"Assigned Homepage design to Mike"}
                />
                <List
                    leftElement={
                        <Avatar
                            size={48}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1678634033564-cac302dcf4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            }
                        />
                    }
                    rightElement={
                        <Img
                            width={80}
                            height={48}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2slMjBncm91bmQlMjBwdXJwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            }
                        />
                    }
                    width={"w-full"}
                    label={"4h ago"}
                    headline={"Mike"}
                    body={"Add bg.jpg to Files"}
                />
                <List
                    leftElement={
                        <Avatar
                            size={48}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1678610751919-c41d6ef8f675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            }
                        />
                    }
                    rightElement={
                        <Img
                            width={48}
                            height={48}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            }
                        />
                    }
                    width={"w-full"}
                    label={"5h ago"}
                    headline={"Tom"}
                    body={"Add GraphicPack to Files"}
                />
            </SideSheet>
        </>
    );
};

export {NavigationDashboard};
