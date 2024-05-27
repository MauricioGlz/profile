import {LinkBox} from "@/core/ui/components";
import {Checkbox, Radio, Switch} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";

export default function Selection() {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-[16px]">
                    <Switch onChange={() => console.log("State changed")} />
                </div>
            </Container>

            <Container>
                <div className="flex flex-col">
                    <Checkbox ariaLabel="Checkbox" />
                    <Checkbox
                        label="I agree to everything"
                        defaultChecked={true}
                    />
                    <Checkbox>
                        I only agree to the{" "}
                        <LinkBox href="#">Terms of Service</LinkBox>
                    </Checkbox>
                </div>
            </Container>

            <Container>
                <div className="flex flex-col">
                    <Radio name="RadioDefault">New-York</Radio>
                    <Radio
                        name="RadioDefault"
                        defaultChecked={true}>
                        Tokio
                    </Radio>
                    <Radio name="RadioDefault">Mumbai</Radio>
                </div>
            </Container>
        </>
    );
}
