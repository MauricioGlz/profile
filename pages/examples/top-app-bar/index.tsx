import {Avatar, IconButton, Progress, TopAppBar} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {
    MdArrowBack,
    MdAttachFile,
    MdCalendarToday,
    MdMenu,
    MdMoreVert,
} from "react-icons/md";

export default function TopAppBarPage() {
    return (
        <>
            <Container padding="pb-16">
                <TopAppBar>
                    <TopAppBar.Center
                        title={"Midzuki Aro"}
                        leftElement={
                            <IconButton
                                variant={"standard"}
                                icon={<MdMenu size={24} />}
                            />
                        }
                        rightElement={
                            <div className="pl-[12px] pr-[16px]">
                                <Avatar
                                    size={30}
                                    smallBadge={true}
                                    badgeColor={"dark:bg-lime-400"}
                                    radius={100}
                                    src={
                                        "https://images.unsplash.com/photo-1666443115863-8e3f81b5f648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    }
                                />
                            </div>
                        }
                    />
                    <Progress percentageValue={20} />
                </TopAppBar>
            </Container>

            <Container padding="pb-16">
                <TopAppBar>
                    <TopAppBar.Small
                        title={"Sushi spot"}
                        leftElement={
                            <IconButton
                                variant={"standard"}
                                icon={<MdArrowBack size={24} />}
                            />
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
                                <IconButton
                                    variant={"standard"}
                                    icon={<MdMoreVert size={24} />}
                                />
                            </>
                        }></TopAppBar.Small>
                    <Progress percentageValue={50} />
                </TopAppBar>
            </Container>

            <Container padding="pb-16">
                <TopAppBar>
                    <TopAppBar.Medium
                        title={"Jessie Maldonado | Indie Dance Sunset Mix 2022"}
                        leftElement={
                            <IconButton
                                variant={"standard"}
                                icon={<MdMenu size={24} />}
                            />
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
                                <IconButton
                                    variant={"standard"}
                                    icon={<MdMoreVert size={24} />}
                                />
                            </>
                        }
                    />
                    <Progress indeterminate />
                </TopAppBar>
            </Container>

            <Container padding="pb-16">
                <TopAppBar>
                    <TopAppBar.Large
                        title={
                            "Back To The 80's | Best of Synthwave Electro Mix"
                        }
                        leftElement={
                            <IconButton
                                variant={"standard"}
                                icon={<MdArrowBack size={24} />}
                            />
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
                                <IconButton
                                    variant={"standard"}
                                    icon={<MdMoreVert size={24} />}
                                />
                            </>
                        }
                    />
                    <Progress determinate />
                </TopAppBar>
            </Container>
        </>
    );
}
