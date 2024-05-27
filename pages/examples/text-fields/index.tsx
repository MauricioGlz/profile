import {useState} from "react";

import me_logo from "/public/material-me/me_logo.svg";

import {
    Button,
    IconButton,
    InputFilled,
    InputOutlined,
    TextFieldFilled,
    TextFieldOutlined,
    Tooltip,
} from "@/core/ui/components";
import {Icon, Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdCheck,
    MdClose,
    MdDataExploration,
    MdSearch,
} from "react-icons/md";

export default function TextFields() {
    const [showButton, setShowButton] = useState("");
    const [showButton2, setShowButton2] = useState("");
    const [showButton3, setShowButton3] = useState("");
    const [showButton4, setShowButton4] = useState("");
    const [showUsername, setShowUsername] = useState("");
    const [showUsername2, setShowUsername2] = useState("");

    return (
        <>
            <Container>
                <InputFilled
                    type={"text"}
                    name={"email"}
                    placeholder={"Enter email"}
                />
            </Container>

            <Container>
                <InputFilled
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                />
            </Container>

            <Container>
                <InputFilled
                    type={"text"}
                    name={"text"}
                    value={showButton}
                    placeholder={"Your name"}
                    onChange={(e) => setShowButton(e.target.value)}
                    leftElement={
                        <Img
                            width={36}
                            height={36}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                            }
                        />
                    }
                    rightElement={
                        showButton ? (
                            <IconButton
                                icon={<MdClose size={24} />}
                                variant={"standard"}
                                onClick={() => setShowButton("")}
                                type="reset"></IconButton>
                        ) : null
                    }
                />
            </Container>

            <Container>
                <InputFilled
                    type={"text"}
                    name={"username"}
                    value={showUsername}
                    placeholder={"Enter username"}
                    onChange={(e) => setShowUsername(e.target.value)}
                    leftElement={
                        <Img
                            width={24}
                            height={24}
                            color={"bg-opacity-100"}
                            objectFit={"fill"}
                            src={me_logo}
                        />
                    }
                    rightElement={
                        showUsername ? (
                            <Tooltip
                                topRight
                                text="Username available">
                                <Icon
                                    className="cursor-help px-[8px] text-lime-500"
                                    icon={<MdCheck size={24} />}
                                />
                            </Tooltip>
                        ) : null
                    }
                />
            </Container>

            <Container>
                <InputFilled
                    type={"text"}
                    name={"search"}
                    placeholder={"Search pools and tokens"}
                    leftElement={
                        <Icon icon={<MdDataExploration size={24} />} />
                    }
                    rightElement={
                        <IconButton
                            icon={<MdSearch size={24} />}
                            variant={"standard"}
                            className={""}
                        />
                    }
                />
            </Container>

            <Container>
                <TextFieldFilled
                    type={"text"}
                    name={"textfield"}
                    value={showButton2}
                    placeholder={"Tell your story"}
                    onChange={(e) => setShowButton2(e.target.value)}
                    rightElement={
                        showButton2 ? (
                            <IconButton
                                icon={<MdClose size={24} />}
                                variant={"standard"}
                                onClick={() => setShowButton2("")}
                                type="reset"
                            />
                        ) : null
                    }
                />
            </Container>

            <Container>
                <InputOutlined
                    type={"text"}
                    name={"text2"}
                    placeholder={"Enter email"}
                />
            </Container>

            <Container>
                <InputOutlined
                    type={"password"}
                    name={"password2"}
                    placeholder={"Password"}
                />
            </Container>

            <Container>
                <InputOutlined
                    type={"text"}
                    name={"text3"}
                    value={showButton3}
                    placeholder={"Cactus name"}
                    onChange={(e) => setShowButton3(e.target.value)}
                    leftElement={
                        <Img
                            width={36}
                            height={36}
                            radius={12}
                            src={
                                "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                            }
                        />
                    }
                    rightElement={
                        showButton3 ? (
                            <Button
                                iconRight={<MdAdd size={24} />}
                                variant={"text"}>
                                Add
                            </Button>
                        ) : null
                    }
                />
            </Container>

            <Container>
                <InputOutlined
                    type={"text"}
                    name={"username2"}
                    value={showUsername2}
                    placeholder={"Enter username"}
                    onChange={(e) => setShowUsername2(e.target.value)}
                    leftElement={
                        <Img
                            width={24}
                            height={24}
                            color={"bg-opacity-100"}
                            objectFit={"fill"}
                            src={me_logo}
                        />
                    }
                    rightElement={
                        showUsername2 ? (
                            <Tooltip
                                topRight
                                text="Username available">
                                <Icon
                                    className="cursor-help px-[8px] text-lime-500"
                                    icon={<MdCheck size={24} />}
                                />
                            </Tooltip>
                        ) : null
                    }
                />
            </Container>

            <Container>
                <InputOutlined
                    type={"text"}
                    name={"search2"}
                    placeholder={"Search pools or tokens"}
                    leftElement={
                        <Icon icon={<MdDataExploration size={24} />} />
                    }
                    rightElement={
                        <IconButton
                            icon={<MdSearch size={24} />}
                            variant={"standard"}
                        />
                    }
                />
            </Container>

            <Container>
                <TextFieldOutlined
                    type={"text"}
                    name={"textfield2"}
                    value={showButton4}
                    placeholder={"Tell your story"}
                    onChange={(e) => setShowButton4(e.target.value)}
                    rightElement={
                        showButton4 ? (
                            <IconButton
                                icon={<MdClose size={24} />}
                                variant={"standard"}
                                onClick={() => setShowButton4("")}
                                type="reset"></IconButton>
                        ) : null
                    }
                />
            </Container>
        </>
    );
}
