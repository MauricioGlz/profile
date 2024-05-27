import {useState} from "react";

import {
    Button,
    IconButton,
    Snackbar,
    SnackbarWrapper,
} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {MdClose} from "react-icons/md";

export default function SnackbarPage() {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const activeSnackbar = () => {
        setShowSnackbar(true);
        setTimeout(() => {
            setShowSnackbar(false);
        }, 4000);
    };

    function onClose() {
        setShowSnackbar(false);
    }

    return (
        <>
            <Container>
                <Button
                    onClick={activeSnackbar}
                    variant="outlined">
                    Some action (show Snackbar)
                </Button>
            </Container>

            <SnackbarWrapper>
                <Snackbar
                    isVisible={showSnackbar}
                    text={"Snackbars provide brief messages"}
                    button={
                        <IconButton
                            variant={"standard"}
                            icon={
                                <MdClose
                                    size={18}
                                    className={"dark:text-indigo-900"}
                                />
                            }
                        />
                    }
                />
            </SnackbarWrapper>
        </>
    );
}
