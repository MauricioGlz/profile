import {
    Avatar,
    BottomAppBar,
    FAB,
    IconButton,
    OverflowMenu,
    PerspectiveImage,
    Progress,
    TopAppBar,
} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdAttachFile,
    MdBarChart,
    MdCalendarToday,
    MdDownload,
    MdLogout,
    MdMenu,
    MdMoreVert,
    MdNotifications,
    MdSettings,
} from "react-icons/md";

export default function PerspectiveImagePage() {
    return (
        <>
            <Container className="mx-[12px] flex items-center justify-center">
                <PerspectiveImage>
                    <Img
                        src={"/material-me/flower.png"}
                        width={300}
                        height={400}
                        color="bg-slate-500/10"
                        radius={24}
                    />
                </PerspectiveImage>
                <PerspectiveImage>
                    <div className="hidden h-[500px] w-[375px] flex-col items-center justify-between overflow-hidden rounded-large border border-slate-100 bg-white/5 transition-all duration-1000 dark:border-none xl:flex">
                        <TopAppBar
                            bg={
                                "dark:bg-gray-900/50 backdrop-blur-md bg-slate-200/50"
                            }>
                            <TopAppBar.Medium
                                title={
                                    "Jessie Maldonado | Indie Dance Sunset Mix 2022"
                                }
                                leftElement={
                                    <OverflowMenu
                                        bottomLeft
                                        menu={
                                            <>
                                                <OverflowMenu.Item
                                                    leftElement={
                                                        <Avatar
                                                            src={
                                                                "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                                                            }
                                                            size={32}
                                                        />
                                                    }
                                                    label={"My profile"}
                                                />
                                                <OverflowMenu.Item
                                                    label={"Messages"}
                                                    badge={true}
                                                    badgeText={"12"}
                                                />
                                                <OverflowMenu.Item
                                                    label={"Notifications"}
                                                    rightElement={
                                                        <MdNotifications
                                                            size={18}
                                                        />
                                                    }
                                                />
                                                <OverflowMenu.Item
                                                    label={"Log out"}
                                                    rightElement={
                                                        <MdLogout size={18} />
                                                    }
                                                />
                                            </>
                                        }>
                                        <IconButton
                                            variant={"standard"}
                                            icon={<MdMenu size={24} />}
                                        />
                                    </OverflowMenu>
                                }
                                rightElement={
                                    <>
                                        <IconButton
                                            variant={"standard"}
                                            icon={<MdAttachFile size={24} />}
                                        />
                                        <IconButton
                                            variant={"standard"}
                                            icon={<MdCalendarToday size={24} />}
                                        />
                                        <OverflowMenu
                                            bottomRight
                                            menu={
                                                <>
                                                    <OverflowMenu.Item
                                                        label={"Save"}
                                                        rightElement={
                                                            <Img
                                                                width={32}
                                                                height={32}
                                                                radius={8}
                                                                src={
                                                                    "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                                                }
                                                            />
                                                        }
                                                    />
                                                    <OverflowMenu.Item
                                                        label={"Copy"}
                                                    />
                                                    <OverflowMenu.Item
                                                        label={"Delete"}
                                                        badge={true}
                                                        badgeText={
                                                            "Be careful!"
                                                        }
                                                    />
                                                    <OverflowMenu.Item
                                                        label={"Settings"}
                                                        rightElement={
                                                            <MdSettings
                                                                size={18}
                                                            />
                                                        }
                                                    />
                                                </>
                                            }>
                                            <IconButton
                                                variant={"standard"}
                                                icon={<MdMoreVert size={24} />}
                                            />
                                        </OverflowMenu>
                                    </>
                                }
                            />
                            <Progress indeterminate />
                        </TopAppBar>
                        <BottomAppBar
                            width={"w-full"}
                            bg={
                                "bg-slate-200/50 backdrop-blur-md dark:bg-gray-900/50"
                            }
                            fab={
                                <FAB
                                    icon={<MdAdd size={24} />}
                                    variant={"surface"}
                                />
                            }>
                            <IconButton
                                icon={<MdAttachFile size={24} />}
                                variant={"standard"}
                                className={"dark:text-white"}
                            />
                            <IconButton
                                icon={<MdDownload size={24} />}
                                variant={"standard"}
                                className={"dark:text-white"}
                            />
                            <IconButton
                                icon={<MdBarChart size={24} />}
                                variant={"standard"}
                                className={"dark:text-white"}
                            />
                        </BottomAppBar>
                    </div>
                </PerspectiveImage>
            </Container>
        </>
    );
}
