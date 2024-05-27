import React from "react";

import {Azeret_Mono} from "next/font/google";

import {Icon, Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import Marquee from "react-fast-marquee";
import {BsArrowUpRight} from "react-icons/bs";

const azeret = Azeret_Mono({subsets: ["latin"]});

function Block({logo, width}: any) {
    return (
        <div className="mx-[12px] flex rounded-extra-large bg-slate-100 p-[48px]">
            <Img
                width={width}
                height={24}
                unoptimized={true}
                placeholder={"empty"}
                color="bg-none"
                src={`/logos/extended/color/${logo}`}
            />
        </div>
    );
}

export default function TickerPage() {
    return (
        <Container
            className="mx-[12px] h-fit flex-col items-center justify-center gap-[48px] py-[80px]"
            padding="mx-0">
            <Marquee speed={100}>
                <Block
                    width={91}
                    logo={"adobe-logo-full.svg"}
                />
                <Block
                    width={95}
                    logo={"ahrefs-logo-full.svg"}
                />
                <Block
                    width={112}
                    logo={"airtable-logo-full.svg"}
                />
                <Block
                    width={122}
                    logo={"asana-logo-full.svg"}
                />
                <Block
                    width={72}
                    logo={"craft-logo-full.svg"}
                />
                <Block
                    width={98}
                    logo={"dribbble-logo-full.svg"}
                />
                <Block
                    width={126}
                    logo={"dropbox-logo-full.svg"}
                />
                <Block
                    width={98}
                    logo={"pinterest-logo-full.svg"}
                />
            </Marquee>

            <Marquee
                speed={60}
                direction={"right"}>
                <div className="flex h-[80px] items-center border-y border-white bg-indigo-700">
                    <div className={`${azeret.className} text-xl`}>
                        Updates coming soon
                    </div>
                    <Icon
                        className="mx-[48px]"
                        icon={<BsArrowUpRight size={36} />}
                    />
                    <div className={`${azeret.className} text-xl`}>
                        Updates coming soon
                    </div>
                    <Icon
                        className="mx-[48px]"
                        icon={<BsArrowUpRight size={36} />}
                    />
                    <div className={`${azeret.className} text-xl`}>
                        materialme.io
                    </div>
                    <Icon
                        className="mx-[48px]"
                        icon={<BsArrowUpRight size={36} />}
                    />
                    <div className={`${azeret.className} text-xl`}>
                        Updates coming soon
                    </div>
                    <Icon
                        className="mx-[48px]"
                        icon={<BsArrowUpRight size={36} />}
                    />
                    <div className={`${azeret.className} text-xl`}>
                        Updates coming soon
                    </div>
                    <Icon
                        className="mx-[48px]"
                        icon={<BsArrowUpRight size={36} />}
                    />
                </div>
            </Marquee>
        </Container>
    );
}
