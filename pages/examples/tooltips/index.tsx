import {Avatar, IconButton, List, Tooltip} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {MdContactSupport} from "react-icons/md";

export default function TooltipPage() {
    return (
        <>
            <Container padding={"py-12 px-6"}>
                <List
                    leftElement={
                        <Tooltip
                            bottomLeft
                            text={"It's your account"}>
                            <Avatar
                                size={56}
                                radius={999}
                                badge={true}
                                badgeText={"🥑"}
                                src={
                                    "https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
                                }
                            />
                        </Tooltip>
                    }
                    rightElement={
                        <Tooltip
                            topRight
                            text={"Some helpful tooltip! 👋"}>
                            <IconButton
                                icon={<MdContactSupport size={24} />}
                                variant={"tonal"}
                            />
                        </Tooltip>
                    }
                    width={"w-full"}
                    label={"Your name is..."}
                    headline={"Daniela"}
                    className={""}
                />
            </Container>
        </>
    );
}
