import {
    Divider,
    Dropdown,
    InputFilled,
    InputOutlined,
} from "@/core/ui/components";
import {Icon, Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdDataExploration} from "react-icons/md";

export default function DropdownPage() {
    return (
        <>
            <Container className="flex">
                <Dropdown
                    className="w-full"
                    menu={
                        <>
                            <Dropdown.Item
                                label={"Exocoin"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                        }
                                    />
                                }
                                rightElement={"EXN"}
                            />
                            <Divider className="my-[6px] px-[12px]" />
                            <Dropdown.Item
                                label={"Green Satoshi"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                        }
                                    />
                                }
                                rightElement={"GST"}
                            />
                            <Divider className="my-[6px] px-[12px]" />

                            <Dropdown.Item
                                label={"Orange Token"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                        }
                                    />
                                }
                                rightElement={"ORNG"}
                            />
                        </>
                    }>
                    <InputFilled
                        type={"text"}
                        name={"search"}
                        placeholder={"Select pools or tokens"}
                        leftElement={
                            <Icon icon={<MdDataExploration size={24} />} />
                        }
                    />
                </Dropdown>
            </Container>

            <Container className="flex">
                <Dropdown
                    apart
                    className={"min-w-[320px]"}
                    menu={
                        <>
                            <Dropdown.Item
                                label={"Exocoin"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                                        }
                                    />
                                }
                                rightElement={"EXN"}
                            />
                            <Divider className="my-[6px] px-[12px]" />
                            <Dropdown.Item
                                label={"Green Satoshi"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                                        }
                                    />
                                }
                                rightElement={"GST"}
                            />
                            <Divider className="my-[6px] px-[12px]" />

                            <Dropdown.Item
                                label={"Orange Token"}
                                leftElement={
                                    <Img
                                        width={36}
                                        height={32}
                                        radius={10}
                                        src={
                                            "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                        }
                                    />
                                }
                                rightElement={"ORNG"}
                            />
                        </>
                    }>
                    <InputOutlined
                        type={"text"}
                        name={"search"}
                        placeholder={"Select pools or tokens"}
                    />
                </Dropdown>
            </Container>
        </>
    );
}
