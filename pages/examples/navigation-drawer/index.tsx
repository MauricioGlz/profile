import {useState} from "react";

import {
    Avatar,
    Button,
    Divider,
    NavigationDrawerIn,
    NavigationDrawerOut,
} from "@/core/ui/components";
import {baseDataDrawer} from "@/core/ui/components/navigation-drawer/data-materialme";
import {Icon, Img, TextElement} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdDataExploration, MdSearch, MdSpa} from "react-icons/md";

export default function NavigationDrawerPage() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDrawerIn, setShowDrawerIn] = useState(true);

    function onClose() {
        setShowDrawer(false);
        setShowDrawerIn(false);
    }

    return (
        <>
            <Container>
                <div className="flex w-full items-center justify-center">
                    <Button
                        onClick={() => setShowDrawer(true)}
                        variant="text">
                        Navigation Drawer Out
                    </Button>
                </div>
            </Container>

            <Container padding={"p-0"}>
                <NavigationDrawerIn isVisible={showDrawerIn}>
                    <div className="flex flex-row gap-[12px] px-[16px]">
                        <Avatar
                            size={48}
                            radius={999}
                            badge={true}
                            badgeText={"2"}
                            badgeColor={"dark:bg-lime-400"}
                            src={
                                "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                            }
                        />

                        <TextElement
                            title="Nedie Lee"
                            body="@nedie"
                        />
                    </div>
                    <Divider />
                    <NavigationDrawerIn.Item
                        key={"1"}
                        url={""}
                        label={"Search"}
                        leftElement={<Icon icon={<MdSearch size={24} />} />}
                    />{" "}
                    <NavigationDrawerIn.Item
                        key={"2"}
                        url={"/navigation-drawer"}
                        label={"Active menu"}
                        leftElement={<Icon icon={<MdSpa size={24} />} />}
                    />
                    <NavigationDrawerIn.Item
                        key={"3"}
                        url={""}
                        label={"Market"}
                        leftElement={
                            <Icon icon={<MdDataExploration size={24} />} />
                        }
                        badge={true}
                    />{" "}
                    <NavigationDrawerIn.Item
                        key={"4"}
                        url={""}
                        label={"Chat"}
                        badge={true}
                        badgeText={"New Message"}
                    />
                    <NavigationDrawerIn.Item
                        key={"5"}
                        url={""}
                        label={"Your Friends"}
                        rightElement={"482"}
                    />{" "}
                    <NavigationDrawerIn.Item
                        key={"6"}
                        url={""}
                        label={"Support"}
                        rightElement={
                            <Avatar
                                size={24}
                                radius={999}
                                smallBadge={true}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                                }
                            />
                        }
                    />
                    <NavigationDrawerIn.Item
                        key={"7"}
                        url={""}
                        label={"Favorites"}
                        rightElement={"5 places"}
                    />
                    <NavigationDrawerIn.Item
                        key={"8"}
                        url={""}
                        label={"Settings"}
                    />
                    <Divider />
                    <NavigationDrawerIn.Item
                        key={"9"}
                        url={""}
                        label={"Abe Fukuda"}
                        leftElement={
                            <Avatar
                                size={24}
                                radius={999}
                                // smallBadge={true}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                }
                            />
                        }
                    />
                    <NavigationDrawerIn.Item
                        key={"10"}
                        url={""}
                        label={"Akira Inu"}
                        leftElement={
                            <Avatar
                                size={24}
                                radius={999}
                                smallBadge={true}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                                }
                            />
                        }
                    />
                    <NavigationDrawerIn.Item
                        key={"11"}
                        url={""}
                        label={"Motoka Hashimoto"}
                        leftElement={
                            <Avatar
                                size={24}
                                radius={999}
                                smallBadge={true}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1504051898397-67f872da760b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                }
                            />
                        }
                    />
                    <Divider />
                    <NavigationDrawerIn.Item
                        key={"12"}
                        url={""}
                        label={"Vegetables"}
                        leftElement={
                            <Img
                                width={86}
                                height={44}
                                radius={999}
                                src={
                                    "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                }
                            />
                        }
                    />
                    <NavigationDrawerIn.Item
                        key={"13"}
                        url={""}
                        label={"Fruits"}
                        leftElement={
                            <Img
                                width={86}
                                height={44}
                                radius={999}
                                src={
                                    "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                }
                            />
                        }
                    />
                    <NavigationDrawerIn.Item
                        key={"14"}
                        url={""}
                        label={"Exotic"}
                        leftElement={
                            <Img
                                width={86}
                                height={44}
                                radius={999}
                                src={
                                    "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                }
                            />
                        }
                    />
                </NavigationDrawerIn>
                <div className="flex w-full flex-col items-center justify-center gap-2 ">
                    <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-gray-100 text-body-medium dark:bg-gray-800 dark:text-white">
                        📈
                    </div>
                    <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-gray-100 text-body-medium dark:bg-gray-800 dark:text-white">
                        👩‍💻
                    </div>
                    <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-gray-100 text-body-medium dark:bg-gray-800 dark:text-white">
                        📄
                    </div>
                </div>
            </Container>

            <NavigationDrawerOut
                isVisible={showDrawer}
                onClose={() => setShowDrawer(false)}>
                {baseDataDrawer.map((item) => (
                    <NavigationDrawerOut.Item
                        key={item.id}
                        url={item.url}
                        label={item.label}
                        badge={item.badge}
                        badgeText={item.badgeText}
                    />
                ))}{" "}
            </NavigationDrawerOut>
        </>
    );
}
