import {useState} from "react";

import {IconButton} from "@/core/ui/components";
import {MdClose} from "react-icons/md";

function Banner() {
    const [active, setActive] = useState(true);

    return (
        <>
            <div
                className={`flex h-fit w-full px-[12px] py-[8px] ${
                    active || "hidden"
                }`}>
                <div className="flex h-auto w-full flex-row items-center justify-between rounded-large bg-surface-container px-[16px] py-[12px]">
                    <div className=" flex w-full flex-col">
                        <h2 className="text-label-large">
                            Hey ⚡️ Announcing Routing Forms !
                        </h2>
                        <p className="text-body-medium">
                            Efficiently screen and automate how people planning
                            with you.
                        </p>
                    </div>
                    <IconButton
                        icon={<MdClose size={24} />}
                        variant={"standard"}
                        onClick={() => setActive(false)}
                    />
                </div>
            </div>
        </>
    );
}

export {Banner};
