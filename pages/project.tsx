import React from "react";
import {
    Avatar,
    AvatarStack,
    Button,
    Card,
    Chips,
    IconButton,
    List,
} from "@/core/ui/components";
import {Img, TextElement} from "@/core/ui/elements";
import { MdMoreHoriz } from "react-icons/md";

export default function Project() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-6xl px-5">
                <div className="col" id="project-images"></div>
                <div className="col" id="project-description">
                    <Card
                        bg={"bg-none"}
                        padding={"p-0"}>
                        <Card.Header>
                            <List
                            leftElement={
                                <Avatar
                                size={48}
                                src={
                                    "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                                }
                                />
                            }
                            headline="Akari Kitagawa"
                            body="@akari"
                            rightElement={
                                <IconButton
                                variant="standard"
                                icon={<MdMoreHoriz size={24} />}
                                />
                            }
                            />
                            </Card.Header>
                        <Card.Body>
                            <Img
                            width={"100%"}
                            height={200}
                            radius={28}
                            src={
                                "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            }
                            />
                            <AvatarStack
                            size={32}
                            avatars={[
                                {
                                    id: "1",
                                    photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
                                    initials: "MJ",
                                },
                                {
                                    id: "2",
                                    photo: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                                    initials: "NS",
                                },
                                {
                                    id: "3",
                                    photo: "",
                                    initials: "MT",
                                },
                                {
                                    id: "4",
                                    photo: "https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                                    initials: "AL",
                                },
                                {
                                    id: "5",
                                    photo: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                                    initials: "JS",
                                },
                            ]}
                            />
                            <TextElement
                            title={"Cards in a collection"}
                            body={
                                "A card can hold anything from images to headlines, supporting text, buttons, lists, and decor components. A card can hold anything from images to headlines, supporting text, buttons, lists, and decor components"
                            }
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Button
                            text={"Read Article"}
                            variant={"outlined"}
                            />
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}