import {Avatar, FAB, NavigationRail} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdAttachFile,
    MdFavorite,
    MdMail,
    MdMap,
    MdMenu,
    MdMessage,
    MdSettings,
} from "react-icons/md";

export default function NavigationRailPage() {
    return (
        <>
            <Container padding={"p-0 sm:min-w-[800px]"}>
                <NavigationRail
                    top={
                        <>
                            <NavigationRail.Item icon={<MdMenu size={24} />} />
                            <FAB
                                icon={<MdAdd size={24} />}
                                size={"fab"}
                                variant={"surface"}
                            />
                        </>
                    }
                    center={
                        <>
                            <NavigationRail.Item
                                icon={<MdAttachFile size={24} />}
                            />
                            <NavigationRail.Item icon={<MdMail size={24} />} />
                            <NavigationRail.Item
                                icon={<MdFavorite size={24} />}
                                badge={true}
                                badgeText={"99+"}
                                badgeColor={"dark:bg-lime-400"}
                            />
                            <NavigationRail.Item icon={<MdMap size={24} />} />
                            <NavigationRail.Item
                                icon={<MdMessage size={24} />}
                                badge={true}
                                badgeText={"12"}
                                badgeColor={"dark:bg-lime-400"}
                            />
                        </>
                    }
                    bottom={
                        <>
                            <NavigationRail.Item
                                icon={<MdSettings size={24} />}
                            />
                            <Avatar
                                size={56}
                                radius={999}
                                badge={true}
                                badgeText={"2"}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                }
                            />
                        </>
                    }
                />
            </Container>

            <Container padding={"p-0 sm:min-w-[800px]"}>
                <NavigationRail
                    top={
                        <>
                            <NavigationRail.Item icon={<MdMenu size={24} />} />
                            <FAB
                                icon={<MdAdd size={24} />}
                                size={"fab"}
                                variant={"surface"}
                            />
                        </>
                    }
                    center={
                        <>
                            <NavigationRail.Item
                                icon={<MdAttachFile size={24} />}
                                label={"Files"}
                            />
                            <NavigationRail.Item
                                icon={<MdMail size={24} />}
                                label={"Inbox"}
                            />
                            <NavigationRail.Item
                                icon={<MdFavorite size={24} />}
                                badge={true}
                                badgeText={"99+"}
                                badgeColor={"dark:bg-lime-400"}
                                label={"Likes"}
                            />
                            <NavigationRail.Item
                                icon={<MdMap size={24} />}
                                label={"Map"}
                            />
                            <NavigationRail.Item
                                icon={<MdMessage size={24} />}
                                badge={true}
                                badgeText={"12"}
                                badgeColor={"dark:bg-lime-400"}
                                label={"Chat"}
                            />
                        </>
                    }
                    bottom={
                        <>
                            <NavigationRail.Item
                                icon={<MdSettings size={24} />}
                            />
                            <Avatar
                                size={56}
                                badge={true}
                                badgeText={"2"}
                                badgeColor={"dark:bg-lime-400"}
                                src={
                                    "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                }
                            />
                        </>
                    }
                />
            </Container>
        </>
    );
}
