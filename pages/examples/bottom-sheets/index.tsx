import {useState} from "react";

import {
    Avatar,
    Badge,
    BottomSheet,
    Button,
    Divider,
    LinkBox,
    List,
} from "@/core/ui/components";
import {Amount, Checkbox, Icon, Img, Switch} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdArrowCircleUp, MdDataExploration} from "react-icons/md";

export default function BottomSheetsPage() {
    const [showSheet, setShowSheet] = useState(false);

    function onClose() {
        setShowSheet(false);
    }

    return (
        <>
            <Container>
                <div className="flex w-full items-center">
                    <Button
                        onClick={() => setShowSheet(true)}
                        variant="outlined">
                        open Bottom Sheets
                    </Button>
                </div>
            </Container>

            <BottomSheet
                isVisible={showSheet}
                onClose={() => setShowSheet(false)}
                dragHandle={true}>
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
                    headline={"Anne Bjørndatter"}></List>
                <List
                    leftElement={
                        <Icon icon={<MdDataExploration size={24} />} />
                    }
                    rightElement={<Icon icon={<MdArrowCircleUp size={24} />} />}
                    width={"w-full"}
                    label={"About"}
                    headline={"Information Lists"}
                    body={
                        "Lists consist of one or more list items, and can contain actions represented by icons and text."
                    }></List>
                <List
                    leftElement={
                        <Avatar
                            size={56}
                            radius={999}
                            badge={true}
                            badgeText={"✌️"}
                            src={
                                "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                            }
                        />
                    }
                    rightElement={<Badge>Need update</Badge>}
                    width={"w-full"}
                    label={"Privacy settings"}
                    headline={"Johanna Bjørk"}></List>
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
                    headline={"Bonsai"}></List>
                <Divider className={"py-[8px]"} />
                <Checkbox padding={" pb-[12px]"}>
                    I agree with the{" "}
                    <LinkBox href="#">Terms of Service</LinkBox> and{" "}
                    <LinkBox href="#">Privacy Policy</LinkBox>
                </Checkbox>
                <Button
                    className={" w-full"}
                    variant={"tonal"}
                    text={"Confirm"}
                />
            </BottomSheet>
        </>
    );
}
