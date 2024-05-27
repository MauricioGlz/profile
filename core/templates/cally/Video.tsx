import video_dark from "/public/templates/cally/screen_dark.png";
import video_light from "/public/templates/cally/screen_light.png";

import {Icon, Img} from "@/core/ui/elements";
import {useTheme} from "next-themes";
import {MdPlayArrow} from "react-icons/md";

function Video() {
    const {resolvedTheme} = useTheme();
    let src;

    switch (resolvedTheme) {
        case "light":
            src = video_light;
            break;
        case "dark":
            src = video_dark;
            break;
    }

    return (
        <>
            <div className="relative flex h-full w-full overflow-x-clip">
                <div className="z-10 flex w-full min-w-max flex-row px-[12px] py-[12px] sm:py-[0px] md:px-[64px] md:py-[64px]">
                    <Img
                        src={src}
                        aspect={1146 / 616}
                        color={"bg-none"}
                        quality={100}
                    />
                    <button className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container/40 backdrop-blur-lg hover:bg-zinc-300/20 dark:hover:bg-zinc-800/50 md:h-[88px] md:w-[88px]">
                        <Icon icon={<MdPlayArrow size={48} />} />
                    </button>
                </div>
            </div>
        </>
    );
}

export {Video};
