import {
    Button,
    ExtendedFAB,
    FAB,
    IconButton,
    SegmentedButtons,
} from "@/core/ui/components";
import {Img, Loading} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdArrowForward,
    MdLocalGroceryStore,
    MdLunchDining,
    MdMoreHoriz,
} from "react-icons/md";

export default function Buttons() {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-1 p-4">
                    <Button
                        iconLeft={<MdLunchDining size={18} />}
                        iconRight={<MdArrowForward size={18} />}
                        variant="filled">
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdLocalGroceryStore size={18} />}
                        variant="filled">
                        Button
                    </Button>

                    <Button
                        iconRight={<MdAdd size={18} />}
                        variant={"filled"}>
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdMoreHoriz size={18} />}
                        variant={"filled"}
                        text={""}
                    />
                    <Button
                        iconLeft={
                            <Loading
                                color={"fill-white dark:fill-indigo-900"}
                                size={18}
                            />
                        }
                        variant={"filled"}
                        text={""}
                    />
                </div>

                <div className="flex flex-col gap-1 p-4">
                    <Button
                        iconLeft={<MdLunchDining size={18} />}
                        iconRight={<MdArrowForward size={18} />}
                        variant={"tonal"}>
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdLocalGroceryStore size={18} />}
                        variant={"tonal"}>
                        Button
                    </Button>

                    <Button
                        iconRight={<MdAdd size={18} />}
                        variant={"tonal"}>
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdMoreHoriz size={18} />}
                        variant={"tonal"}
                        text={""}
                    />
                    <Button
                        iconLeft={
                            <Loading
                                color={"fill-indigo-600 dark:fill-indigo-400"}
                                size={18}
                            />
                        }
                        variant={"tonal"}
                        text={""}
                    />
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <Button
                        iconLeft={<MdLunchDining size={18} />}
                        iconRight={<MdArrowForward size={18} />}
                        variant={"outlined"}>
                        Button
                    </Button>
                    <Button
                        iconLeft={<MdLocalGroceryStore size={18} />}
                        variant={"outlined"}>
                        Button
                    </Button>
                    <Button
                        iconRight={<MdAdd size={18} />}
                        variant={"outlined"}>
                        Button
                    </Button>
                    <Button
                        iconLeft={<MdMoreHoriz size={18} />}
                        variant={"outlined"}
                        text={""}
                    />
                    <Button
                        iconLeft={<Loading size={18} />}
                        variant={"outlined"}
                        text={""}
                    />
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <Button
                        iconLeft={<MdLunchDining size={18} />}
                        iconRight={<MdArrowForward size={18} />}
                        variant={"elevated"}>
                        Button
                    </Button>
                    <Button
                        iconLeft={<MdLocalGroceryStore size={18} />}
                        variant={"elevated"}>
                        Button
                    </Button>
                    <Button
                        iconRight={<MdAdd size={18} />}
                        variant={"elevated"}>
                        Button
                    </Button>
                    <Button
                        iconLeft={<MdMoreHoriz size={18} />}
                        variant={"elevated"}
                        text={""}
                    />
                    <Button
                        iconLeft={<Loading size={18} />}
                        variant={"elevated"}
                        text={""}
                    />
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <Button
                        iconLeft={<MdLunchDining size={18} />}
                        iconRight={<MdArrowForward size={18} />}
                        variant={"text"}>
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdLocalGroceryStore size={18} />}
                        variant={"text"}>
                        Button
                    </Button>

                    <Button
                        iconRight={<MdAdd size={18} />}
                        variant={"text"}>
                        Button
                    </Button>

                    <Button
                        iconLeft={<MdMoreHoriz size={18} />}
                        variant={"text"}
                        text={""}
                    />
                    <Button
                        iconLeft={<Loading size={18} />}
                        variant={"text"}
                        text={""}
                    />
                </div>
            </Container>

            <Container>
                <div className="">
                    <ExtendedFAB
                        icon={<MdAdd size={24} />}
                        variant={"surface"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                    <ExtendedFAB
                        // icon={<MdAdd size={24} />}
                        variant={"surface"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                </div>
                <div className="">
                    <ExtendedFAB
                        icon={<MdAdd size={24} />}
                        variant={"secondary"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                    <ExtendedFAB
                        // icon={<MdAdd size={24} />}
                        variant={"secondary"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                </div>
                <div className="">
                    <ExtendedFAB
                        icon={<MdAdd size={24} />}
                        variant={"tertiary"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                    <ExtendedFAB
                        // icon={<MdAdd size={24} />}
                        variant={"tertiary"}
                        className={""}>
                        {"Extended FAB"}
                    </ExtendedFAB>
                </div>
            </Container>

            <Container>
                <div className="">
                    <FAB
                        icon={<MdAdd size={24} />}
                        size={"fab"}
                        variant={"surface"}></FAB>
                    <FAB
                        icon={<MdLocalGroceryStore size={24} />}
                        size={"fabSmall"}
                        variant={"surface"}></FAB>

                    <FAB
                        icon={<MdAdd size={36} />}
                        size={"fabLarge"}
                        variant={"surface"}></FAB>
                </div>
                <div className="">
                    <FAB
                        icon={<MdAdd size={24} />}
                        size={"fab"}
                        variant={"secondary"}></FAB>
                    <FAB
                        icon={<MdLocalGroceryStore size={24} />}
                        size={"fabSmall"}
                        variant={"secondary"}></FAB>

                    <FAB
                        icon={<MdAdd size={36} />}
                        size={"fabLarge"}
                        variant={"secondary"}></FAB>
                </div>
                <div className="">
                    <FAB
                        icon={<MdAdd size={24} />}
                        size={"fab"}
                        variant={"tertiary"}></FAB>
                    <FAB
                        icon={<MdLocalGroceryStore size={24} />}
                        size={"fabSmall"}
                        variant={"tertiary"}></FAB>

                    <FAB
                        icon={<MdAdd size={36} />}
                        size={"fabLarge"}
                        variant={"tertiary"}></FAB>
                </div>
            </Container>

            <Container>
                <div className="flex flex-col gap-1 p-4">
                    <IconButton
                        icon={<MdAdd size={24} />}
                        variant="filled"
                    />
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <IconButton
                        icon={<MdAdd size={24} />}
                        variant="tonal">
                        Button
                    </IconButton>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <IconButton
                        icon={<MdAdd size={24} />}
                        variant="outlined">
                        Button
                    </IconButton>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <IconButton
                        icon={<MdAdd size={24} />}
                        variant="standard">
                        Button
                    </IconButton>
                </div>
            </Container>

            <Container>
                <SegmentedButtons
                    buttons={[
                        {
                            id: "1",
                            header: "New-York",
                            content: (
                                <>
                                    <p>
                                        <strong>New-York</strong>, often called
                                        New York City or NYC, is the most
                                        populous city in the United States. With
                                        a 2020 population of 8,804,190
                                        distributed over 300.46 ...
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: "2",
                            header: "Singapore",
                            content: (
                                <>
                                    <p>
                                        <strong>Singapore</strong>, officially
                                        the Republic of Singapore, is a
                                        sovereign island country and city-state
                                        in maritime Southeast Asia.
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: "3",
                            header: "Bangkok",
                            content: (
                                <>
                                    <p>
                                        <strong>Bangkok</strong>, officially
                                        known in Thai as Krung Thep Maha Nakhon
                                        and colloquially as Krung Thep, is the
                                        capital and most populous city of
                                        Thailand.
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                    ]}
                />
            </Container>
        </>
    );
}
