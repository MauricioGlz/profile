import {useState} from "react";

import {Avatar, Button, Dialog, List, Tooltip} from "@/core/ui/components";
import {Checkbox} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdRefresh} from "react-icons/md";

export default function Dialogs() {
    const [showDialog, setShowDialog] = useState(false);
    const [showDialog1, setShowDialog1] = useState(false);

    function onClose() {
        setShowDialog(false);
        setShowDialog1(false);
    }

    return (
        <>
            <Container>
                <div className="flex w-full items-center justify-center">
                    <Button
                        onClick={() => setShowDialog(true)}
                        variant="text">
                        Dialog
                    </Button>
                </div>
            </Container>
            <Container>
                <div className="flex w-full items-center justify-center">
                    <Button
                        onClick={() => setShowDialog1(true)}
                        variant="text">
                        Simple Dialog
                    </Button>
                </div>
            </Container>

            <Dialog
                isVisible={showDialog}
                onClose={() => setShowDialog(false)}>
                <Dialog.Header
                    icon={<MdRefresh size={24} />}
                    headline="Reset Settings?"
                    text="Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement."
                />
                <Dialog.Body className={"flex w-full flex-col"}>
                    <List
                        leftElement={
                            <Tooltip
                                topLeft={true}
                                text={
                                    "It's your profile and you have root access to write long tooltips"
                                }>
                                <Avatar
                                    size={40}
                                    radius={999}
                                    src={
                                        "https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    }
                                />
                            </Tooltip>
                        }
                        rightElement={<Checkbox />}
                        body={"mike@materialme.io"}></List>
                    <List
                        leftElement={
                            <Tooltip
                                bottomLeft={true}
                                text={"It's your profile"}>
                                <Avatar
                                    size={40}
                                    radius={999}
                                    src={
                                        "https://images.unsplash.com/photo-1618481212122-7ddab34f8453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                                    }
                                />
                            </Tooltip>
                        }
                        rightElement={<Checkbox />}
                        body={"daniela@materialme.io"}></List>
                    <List
                        leftElement={
                            <Tooltip
                                bottomLeft={true}
                                text={"It's your profile"}>
                                <Avatar
                                    size={40}
                                    radius={999}
                                    src={
                                        "https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                                    }
                                />
                            </Tooltip>
                        }
                        rightElement={<Checkbox />}
                        body={"lizy@materialme.io"}></List>
                </Dialog.Body>
                <Dialog.Footer>
                    <Button
                        onClick={onClose}
                        variant="text">
                        Cancel
                    </Button>{" "}
                    <Button
                        onClick={onClose}
                        variant="outlined">
                        Accept
                    </Button>
                </Dialog.Footer>
            </Dialog>

            <Dialog
                isVisible={showDialog1}
                onClose={() => setShowDialog1(false)}>
                <Dialog.Header
                    headline="Simple Dialog"
                    text="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
                />
                <Dialog.Footer>
                    <Button
                        onClick={onClose}
                        variant="text">
                        Cancel
                    </Button>{" "}
                    <Button
                        onClick={onClose}
                        variant="outlined">
                        Accept
                    </Button>
                </Dialog.Footer>
            </Dialog>
        </>
    );
}
