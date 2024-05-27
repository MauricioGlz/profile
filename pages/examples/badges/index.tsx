import {Badge, DotBadge, OnIconBadge} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {
    MdAdd,
    MdArrowDownward,
    MdArrowForward,
    MdLocalGroceryStore,
    MdLunchDining,
} from "react-icons/md";

export default function Badges() {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-2 p-2">
                    <Badge
                        iconLeft={<MdLunchDining size={12} />}
                        iconRight={<MdArrowForward size={12} />}
                        text={"Large Badge"}
                    />
                    <Badge
                        iconLeft={<MdLocalGroceryStore size={12} />}
                        text={"Badge"}
                    />
                    <Badge
                        iconRight={<MdArrowDownward size={12} />}
                        text={"1.2%"}
                    />
                    <Badge>Text</Badge>
                    <Badge icon={<MdAdd size={12} />} />
                    <DotBadge />
                </div>
            </Container>

            <Container>
                <div className="flex flex-col gap-8 p-4">
                    <div className="relative h-[24px] w-[24px] rounded-lg bg-surface-container">
                        <div className="absolute right-0 top-0 flex items-center justify-center">
                            <OnIconBadge count={12} />
                        </div>
                    </div>
                    <div className="relative h-[24px] w-[24px] rounded-lg bg-surface-container">
                        <div className="absolute -top-0 right-0 flex items-center justify-center">
                            <OnIconBadge />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
