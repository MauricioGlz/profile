import me_logo from "/public/material-me/me_logo.svg";

import {Avatar, AvatarStack} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";

export default function AvatarPage() {
    return (
        <>
            <Container>
                <div className="flex flex-row items-center gap-8">
                    <Avatar
                        size={64}
                        badge={true}
                        badgeText={"999+"}
                        src={
                            "https://images.unsplash.com/photo-1665174271625-178021f8b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        }
                    />

                    <Avatar
                        size={48}
                        badge={true}
                        badgeColor={"dark:bg-gray-800 bg-indigo-50"}
                        badgeIcon={
                            <Img
                                width={12}
                                color={"opacity-100"}
                                height={14}
                                objectFit={"fill"}
                                src={me_logo}
                            />
                        }
                        src={
                            "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                        }
                    />
                    <Avatar
                        size={40}
                        badge={true}
                        badgeText={"3"}
                        badgeColor={
                            "bg-gradient-to-r from-indigo-300 to-violet-400"
                        }
                        src={
                            "https://images.unsplash.com/photo-1660404903919-f398d1ff4eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHBvcnRyYWl0fGVufDB8MnwyfHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <Avatar
                        size={32}
                        dotBadge={true}
                        badgeColor={"dark:bg-lime-400"}
                        src={
                            "https://images.unsplash.com/photo-1660314019032-268d70002b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        }
                    />
                </div>
            </Container>

            <Container>
                <div className="flex flex-row items-center gap-8">
                    <Avatar
                        size={24}
                        smallBadge={true}
                        badgeColor={"dark:bg-lime-400"}
                        src={
                            "https://images.unsplash.com/photo-1658572663657-a721c7b4f01c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"
                        }
                    />
                    <Avatar
                        size={18}
                        src={
                            "https://images.unsplash.com/photo-1657720964990-1771b7cc149f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        }
                    />
                </div>
            </Container>

            <Container>
                <div className="flex flex-row items-center gap-8">
                    <Avatar
                        size={64}
                        ring
                        src={
                            "https://images.unsplash.com/photo-1673945103114-15fc1f40cfd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        }
                    />

                    <Avatar
                        size={48}
                        ring
                        src={
                            "https://images.unsplash.com/photo-1674167526280-8ee04e4a473c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <Avatar
                        size={40}
                        ring
                        badgeColor={
                            "bg-gradient-to-r from-indigo-300 to-violet-400"
                        }
                        src={
                            "https://images.unsplash.com/photo-1632700454633-28ad72be520b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw4d2EybUlNWEt3TXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                    <Avatar
                        size={32}
                        ring
                        src={
                            "https://images.unsplash.com/photo-1529271247619-1f9736e6e8ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzg3OTR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                        }
                    />
                </div>
            </Container>

            <Container>
                <div className="flex flex-row items-center gap-8">
                    <Avatar
                        size={64}
                        badge={true}
                        badgeText={"999+"}
                        badgeColor={"dark:bg-lime-400"}
                        name={"Max Power"}
                    />
                    <Avatar
                        size={48}
                        name={"Max"}
                    />
                    <Avatar
                        size={40}
                        badge={true}
                        badgeText={"3"}
                        badgeColor={"dark:bg-lime-400"}
                        name={"MP"}
                    />
                    <Avatar
                        size={32}
                        name={"M"}
                    />
                </div>
            </Container>

            <Container>
                <AvatarStack
                    size={32}
                    avatars={[
                        {
                            id: "1",
                            photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
                            initials: "MJ",
                        },
                        {
                            id: "2",
                            photo: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                            initials: "NS",
                        },
                        {
                            id: "3",
                            photo: "",
                            initials: "MT",
                        },
                        {
                            id: "4",
                            photo: "https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                            initials: "AL",
                        },
                        {
                            id: "5",
                            photo: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                            initials: "JS",
                        },
                    ]}
                />
            </Container>

            <Container>
                <AvatarStack
                    avatars={[
                        {
                            id: "1",
                            photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
                            initials: "MJ",
                            width: 56,
                        },
                        {
                            id: "2",
                            photo: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                            initials: "NS",
                        },
                        {
                            id: "3",
                            photo: "",
                            initials: "MT",
                        },
                        {
                            id: "4",
                            photo: "https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                            initials: "AL",
                            width: 56,
                        },
                        {
                            id: "5",
                            photo: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                            initials: "JS",
                        },
                    ]}
                />
            </Container>
        </>
    );
}
