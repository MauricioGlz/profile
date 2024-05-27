import {Avatar, Badge, Button, List} from "@/core/ui/components";
import {Amount, Icon, Img, Switch} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdArrowCircleUp, MdDataExploration} from "react-icons/md";

export default function ListsPage() {
    return (
        <>
            <Container padding={"p-6 flex-col gap-4"}>
                <List
                    leftElement={
                        <Img
                            width={56}
                            height={56}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1573689705887-bc0763c82ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                            }
                        />
                    }
                    rightElement={<Button variant="filled">Add</Button>}
                    width={"w-full"}
                    headline={"Cactus"}
                    body={"in stock"}></List>
                <List
                    leftElement={
                        <Avatar
                            size={32}
                            smallBadge={true}
                            badgeColor={"dark:bg-lime-400"}
                            radius={100}
                            src={
                                "https://images.unsplash.com/photo-1666443115863-8e3f81b5f648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            }
                        />
                    }
                    rightElement={
                        <Switch onChange={() => console.log("State changed")} />
                    }
                    width={"w-full"}
                    label={"Access"}
                    headline={"Anne Bjørndatter"}
                />
                <List
                    leftElement={
                        <Icon icon={<MdDataExploration size={24} />} />
                    }
                    rightElement={<Icon icon={<MdArrowCircleUp size={24} />} />}
                    width={"w-full"}
                    label={"About"}
                    headline={"Material Me Lists"}
                    body={
                        "Lists consist of one or more list items, and can contain actions represented by icons and text."
                    }
                />
                <List
                    leftElement={
                        <Avatar
                            size={56}
                            radius={999}
                            badge={true}
                            badgeText={"👾"}
                            badgeColor={"dark:bg-lime-400"}
                            src={
                                "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                            }
                        />
                    }
                    rightElement={
                        <Badge
                            className={"dark:bg-lime-500"}
                            // onClick={}
                        >
                            Need update
                        </Badge>
                    }
                    width={"w-full"}
                    label={"Privacy settings"}
                    headline={"Johanna Bjørk"}
                />
                <List
                    leftElement={
                        <Img
                            width={112}
                            height={56}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            }
                        />
                    }
                    rightElement={<Amount />}
                    width={"w-full"}
                    label={"Plants"}
                    headline={"Bonsai"}
                />
            </Container>
        </>
    );
}
