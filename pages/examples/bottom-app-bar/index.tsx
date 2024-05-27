import {BottomAppBar, FAB, IconButton} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdAttachFile,
    MdBarChart,
    MdDownload,
    MdMenu,
} from "react-icons/md";

export default function BottomAppBarPage() {
    return (
        <>
            <Container padding={"p-0 pt-32"}>
                <BottomAppBar
                    fab={
                        <FAB
                            icon={<MdAdd size={24} />}
                            variant={"surface"}
                        />
                    }>
                    <IconButton
                        icon={<MdMenu size={24} />}
                        variant={"standard"}
                        className={"dark:text-white"}
                    />
                    <IconButton
                        icon={<MdAttachFile size={24} />}
                        variant={"standard"}
                        className={"dark:text-white"}
                    />
                    <IconButton
                        icon={<MdDownload size={24} />}
                        variant={"standard"}
                        className={"dark:text-white"}
                    />
                    <IconButton
                        icon={<MdBarChart size={24} />}
                        variant={"standard"}
                        className={"dark:text-white"}
                    />
                </BottomAppBar>
            </Container>
        </>
    );
}
