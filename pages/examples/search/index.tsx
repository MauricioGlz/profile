import {
    Avatar,
    Divider,
    Search,
    SearchInput,
    SearchItem,
} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdSearch} from "react-icons/md";

export default function SearchPage() {
    return (
        <>
            <Container className="m-[48px] flex flex-col gap-[24px]">
                <Search
                    result={
                        <>
                            <Divider className="mb-[6px] mt-[-8px]" />
                            <SearchItem
                                label={"melon.jpg"}
                                leftElement={
                                    <Img
                                        width={24}
                                        height={24}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1563288525-8f1ee0f874a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVsb258ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                                        }
                                    />
                                }
                                rightElement={"1.5 mb"}
                            />
                            <Divider className="my-[6px] px-[16px]" />
                            <SearchItem
                                label={"Spinach.jpeg"}
                                leftElement={
                                    <Img
                                        width={24}
                                        height={24}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1617884638394-d9eef1b0f40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                                        }
                                    />
                                }
                                rightElement={"898 kb"}
                            />
                            <Divider className="my-[6px] px-[16px]" />

                            <SearchItem
                                label={"Spinach2.jpeg"}
                                leftElement={
                                    <Img
                                        width={24}
                                        height={24}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                                        }
                                    />
                                }
                                rightElement={"2.01 mb"}
                            />
                        </>
                    }>
                    <SearchInput
                        type={"text"}
                        name={"search"}
                        placeholder={"Search"}
                        leftElement={<MdSearch size={24} />}
                        rightElement={
                            <Avatar
                                size={24}
                                radius={999}
                                ring
                                src={
                                    "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                                }
                            />
                        }
                    />
                </Search>
            </Container>
        </>
    );
}
