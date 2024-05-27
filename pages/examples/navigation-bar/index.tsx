import {NavBarItem, NavigationBar} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {MdFavorite, MdMail, MdMap, MdMenu, MdMessage} from "react-icons/md";

export default function NavigationBars() {
    return (
        <>
            <Container padding={"p-0 pt-32"}>
                <NavigationBar width={"w-screen"}>
                    <NavBarItem
                        icon={<MdMessage size={24} />}
                        badge={true}
                        badgeText={"12"}
                        badgeColor={"dark:bg-lime-400"}
                    />
                    <NavBarItem icon={<MdMail size={24} />} />
                    <NavBarItem
                        icon={<MdFavorite size={24} />}
                        badge={true}
                        badgeText={"999+"}
                        badgeColor={"dark:bg-lime-400"}
                    />
                    <NavBarItem icon={<MdMap size={24} />} />
                    <NavBarItem
                        icon={<MdMenu size={24} />}
                        badge={true}
                        badgeColor={"dark:bg-lime-400"}
                    />
                </NavigationBar>
            </Container>

            <Container padding={"p-0 pt-32"}>
                <NavigationBar width={"w-screen"}>
                    <NavBarItem
                        icon={<MdMessage size={24} />}
                        badge={true}
                        badgeText={"12"}
                        badgeColor={"dark:bg-lime-400"}
                        label={"Chat"}
                    />
                    <NavBarItem
                        icon={<MdMail size={24} />}
                        label={"Inbox"}
                    />
                    <NavBarItem
                        icon={<MdFavorite size={24} />}
                        badge={true}
                        badgeText={"999+"}
                        badgeColor={"dark:bg-lime-400"}
                        label={"Favorites"}
                    />
                    <NavBarItem
                        icon={<MdMap size={24} />}
                        label={"Map"}
                    />
                    <NavBarItem
                        icon={<MdMenu size={24} />}
                        badge={true}
                        badgeText={""}
                        badgeColor={"dark:bg-lime-400"}
                        label={"Menu"}
                    />
                </NavigationBar>
            </Container>
        </>
    );
}
