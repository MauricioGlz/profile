function FeatureA() {
    return (
        <>
            <section className="z-10 flex h-fit flex-col items-center gap-[16px] pt-[48px] md:pt-[24px]">
                <h2 className="flex w-full items-center justify-center px-[24px] text-center text-display-small font-bold md:text-display-medium md:font-bold lg:w-3/5">
                    Solution for thriving product communities
                </h2>
                <div className="flex w-full flex-col gap-[16px] p-[16px] lg:flex-row">
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            🚀
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Customer Engagement
                            </h3>
                            <p className="text-body-large">
                                Convert customers into engaged advocates. Build
                                and grow customer relationships with powerful
                                planning tools.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            🤝
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Support and self-service
                            </h3>
                            <p className="text-body-large">
                                Empower customers to help each other. Enable
                                them to solve problems independently with
                                collective wisdom.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-[24px] rounded-extra-large bg-surface-container p-[24px]">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-extra-large bg-white text-display-small dark:bg-zinc-700">
                            💬
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h3 className="text-headline-medium font-bold">
                                Feedback and communication
                            </h3>
                            <p className="text-body-large">
                                Embrace the Voice of the Customer, collect
                                actionable insights, and share product updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export {FeatureA};
