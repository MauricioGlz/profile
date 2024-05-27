import {ExtendedFAB, List, SegmentedButtons} from "@/core/ui/components";
import {MdCheck} from "react-icons/md";

function Price() {
    return (
        <>
            <section className="z-10 flex h-fit w-full flex-col items-center justify-center gap-[16px] pt-[48px] md:pt-[64px]">
                <h2 className="flex w-full items-center justify-center text-center text-display-small font-bold md:w-2/3 md:text-display-medium md:font-bold">
                    Build the right plan for your team
                </h2>
                <p className="text-body-large">
                    Start my free trial, no credit card required.
                </p>
                <SegmentedButtons
                    className="items-center gap-[24px] px-0"
                    buttons={[
                        {
                            id: "1",
                            header: "Monthly",
                            content: (
                                <div className="flex w-full flex-row gap-[24px] overflow-x-auto px-[16px] scrollbar-hide lg:justify-center">
                                    <div className="my-[24px] flex min-w-[300px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container  p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Starter
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $9/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={"w-full"}
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Access Index with web, iOS, and Android apps"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={"Active event types"}
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Send your invitee email reminders and follow-ups"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Customize email notifications and reminders"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex min-w-[320px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container  p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Plus
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $19/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={"w-full"}
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Everything in Starter, and:"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Connect to Google, Office 365, Outlook, and iCloud calendars"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Create unlimited one-on-one events"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Automated event notifications"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Get meeting notifications via text"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="my-[24px] flex min-w-[300px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container  p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Pro
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $39/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={"w-full"}
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Everything in Plus, and:"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Create automated workflows"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Add links to your confirmation pages"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={"Redirect your invitees"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            id: "2",
                            header: "Yearly",
                            content: (
                                <div className="flex flex-row gap-[24px] overflow-x-auto px-[16px] scrollbar-hide lg:justify-center">
                                    <div className="my-[24px] flex min-w-[300px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container   p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Starter
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $5/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={
                                                "z-40 m-[4px] my-[8px] w-full text-on-surface dark:bg-zinc-700 dark:hover:opacity-90"
                                            }
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Access Index with web, iOS, and Android apps"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={"Active event types"}
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Send your invitee email reminders and follow-ups"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Customize email notifications and reminders"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex min-w-[320px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container  p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Plus
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $15/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={
                                                "z-40 m-[4px] my-[8px] w-full scale-105 text-on-surface dark:bg-zinc-700 dark:hover:opacity-90"
                                            }
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Everything in Starter, and:"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Connect to Google, Office 365, Outlook, and iCloud calendars"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Create unlimited one-on-one events"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Automated event notifications"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Get meeting notifications via text"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="my-[24px] flex min-w-[300px] max-w-[360px] flex-col items-center justify-center gap-[12px] rounded-extra-large bg-surface-container   p-[24px]">
                                        <h3 className="text-headline-small font-bold">
                                            Pro
                                        </h3>
                                        <p className="text-center text-body-large">
                                            When you need customization,
                                            integrations, and basic team
                                            features
                                        </p>
                                        <h1 className="text-headline-medium font-bold">
                                            $30/seat/mo
                                        </h1>
                                        <ExtendedFAB
                                            className={
                                                "z-40 m-[4px] my-[8px] w-full scale-105 text-on-surface dark:bg-zinc-700 dark:hover:opacity-90"
                                            }
                                            text="Try it free"
                                            variant={"surface"}
                                        />
                                        <div>
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                headline={
                                                    "Everything in Plus, and:"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Create automated workflows"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={
                                                    "Add links to your confirmation pages"
                                                }
                                            />
                                            <List
                                                leftElement={
                                                    <MdCheck
                                                        size={18}
                                                        color="#16A34A"
                                                    />
                                                }
                                                body={"Redirect your invitees"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                    ]}
                />
            </section>
        </>
    );
}

export {Price};
