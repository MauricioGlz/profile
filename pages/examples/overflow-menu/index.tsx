import {useState} from "react";

import {Avatar, Button, IconButton, OverflowMenu} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {
    MdContentCut,
    MdCopyAll,
    MdDelete,
    MdEdit,
    MdMore,
    MdMoreHoriz,
    MdMoreVert,
    MdSettings,
    MdShare,
    MdUpload,
} from "react-icons/md";

export default function OverflowMenuPage() {
    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        alert("OverflowMenuItem clicked!");
    }

    return (
        <>
            <Container className="m-[24px] my-[48px] flex items-center justify-end text-body-medium dark:text-white">
                <OverflowMenu
                    bottomRight
                    menu={
                        <>
                            <OverflowMenu.Item
                                onClick={handleClick}
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
                                onClick={handleClick}
                                label={"Copy"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Delete"}
                                badge={true}
                                badgeText={"Be careful!"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Settings"}
                                rightElement={<MdSettings size={18} />}
                            />
                        </>
                    }>
                    <IconButton
                        icon={<MdMoreVert size={24} />}
                        variant={"tonal"}
                    />
                </OverflowMenu>
            </Container>

            <Container className="m-[24px] my-[48px] flex  items-center justify-between p-4 text-body-medium dark:text-white">
                <OverflowMenu
                    bottomLeft
                    menu={
                        <>
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Cut"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Copy"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Share"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Upload"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Edit"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Delete"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"Settings"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                label={"More"}
                            />
                        </>
                    }>
                    <Button
                        text={""}
                        iconLeft={<MdMoreHoriz size={24} />}
                        variant={"tonal"}
                    />
                </OverflowMenu>
            </Container>

            <Container className="m-[24px] my-[48px] flex  items-center justify-end p-4 text-body-medium dark:text-white">
                <OverflowMenu
                    topRight
                    menu={
                        <>
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdContentCut size={18} />}
                                label={"Cut"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdCopyAll size={18} />}
                                label={"Copy"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdShare size={18} />}
                                label={"Share"}
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
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdUpload size={18} />}
                                rightElement={"1.23Gb"}
                                label={"Upload file"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdEdit size={18} />}
                                label={"Edit"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdDelete size={18} />}
                                label={"Delete"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdSettings size={18} />}
                                label={"Settings"}
                            />

                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdMore size={18} />}
                                label={"More"}
                            />
                        </>
                    }>
                    <Button
                        text={"Menu"}
                        variant={"outlined"}
                        onClick={() => setShowMenu(true)}
                    />
                </OverflowMenu>
            </Container>

            <Container className="m-[24px] my-[48px] flex  items-center justify-start p-4 text-body-medium dark:text-white">
                <OverflowMenu
                    topLeft
                    menu={
                        <>
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdContentCut size={18} />}
                                label={"Cut"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdCopyAll size={18} />}
                                label={"Copy"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdShare size={18} />}
                                label={"Share"}
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
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdUpload size={18} />}
                                rightElement={"1.23Gb"}
                                label={"Upload file"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdEdit size={18} />}
                                label={"Edit"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdDelete size={18} />}
                                label={"Delete"}
                            />
                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdSettings size={18} />}
                                label={"Settings"}
                            />

                            <OverflowMenu.Item
                                onClick={handleClick}
                                leftElement={<MdMore size={18} />}
                                label={"More"}
                            />
                        </>
                    }>
                    <Button
                        text={"Menu"}
                        variant={"outlined"}
                    />
                </OverflowMenu>
            </Container>
        </>
    );
}
