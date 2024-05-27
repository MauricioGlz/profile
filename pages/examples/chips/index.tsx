import {Chips} from "@/core/ui/components";
import {Icon, Img, Loading} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdDone, MdFacebook} from "react-icons/md";
import {MdArrowForward, MdClose} from "react-icons/md";

export default function ChipsPage() {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-2 p-4">
                    <Chips
                        leftElement={<Icon icon={<MdFacebook size={18} />} />}
                        rightElement={<MdArrowForward size={18} />}
                        text="Large chip"
                    />
                    <Chips
                        leftElement={<MdDone size={18} />}
                        text="Filter"
                    />
                    <Chips
                        leftElement={<Loading size={18} />}
                        text="Loading"
                    />
                    <Chips
                        rightElement={<MdClose size={18} />}
                        text="Text"
                    />
                    <Chips>Suggestion chip</Chips>
                    <Chips
                        leftElement={
                            <Img
                                width={18}
                                height={18}
                                radius={12}
                                src={
                                    "https://images.unsplash.com/photo-1550259114-ad7188f0a967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                }
                            />
                        }>
                        Food
                    </Chips>
                </div>
            </Container>
        </>
    );
}
