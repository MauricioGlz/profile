import {useState} from "react";

import {Button, Circle, Progress} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";

export default function ProgressBarPage() {
    const [usePercent, setUsePercent] = useState(0);
    const [useCircle, setUseCircle] = useState(0);

    return (
        <>
            <Container className="flex flex-col gap-7 p-[48px] sm:min-w-[800px] ">
                <div className=" flex w-32">
                    <div className="flex flex-row gap-4">
                        <Button
                            variant="tonal"
                            onClick={() => setUsePercent(5)}>
                            5%
                        </Button>
                        <Button
                            variant="tonal"
                            onClick={() => setUsePercent(50)}>
                            50%
                        </Button>
                        <Button
                            variant="tonal"
                            onClick={() => setUsePercent(100)}>
                            100%
                        </Button>
                    </div>
                </div>
                <Progress
                    percentageValue={usePercent}
                    duration={5000}
                />
            </Container>

            <Container className="flex flex-col gap-[24px] p-[48px]">
                <>
                    <Progress />
                    <Progress percentageValue={50} />
                    <Progress determinate />
                    <Progress
                        percentageValue={50}
                        determinate
                    />
                </>
            </Container>

            <Container className="flex flex-col p-[48px]">
                <Progress indeterminate />
            </Container>

            <Container className="flex flex-col gap-7 p-[48px] sm:min-w-[800px] ">
                <div className="flex flex-row gap-4">
                    <Button
                        variant="tonal"
                        onClick={() => setUseCircle(5)}>
                        5%
                    </Button>{" "}
                    <Button
                        variant="tonal"
                        onClick={() => setUseCircle(50)}>
                        50%
                    </Button>
                    <Button
                        variant="tonal"
                        onClick={() => setUseCircle(100)}>
                        100%
                    </Button>
                </div>
                <div className="flex flex-row gap-[24px]">
                    <Circle value={useCircle} />
                    <Circle
                        value={useCircle}
                        color="stroke-purple-400"
                    />
                </div>
            </Container>
        </>
    );
}
