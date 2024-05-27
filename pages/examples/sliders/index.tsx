import {Slider, SliderDual} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";
import {MdVolumeUp} from "react-icons/md";

export default function SlidersPage() {
    return (
        <>
            <Container padding="py-[48px] px-8">
                <div className="flex w-full flex-col gap-[48px]">
                    <Slider
                        min={0}
                        max={100}
                        step={2}
                        onChange={({min}) => console.log(`value = ${min}`)}
                    />
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        tooltipChildren={<MdVolumeUp size={12} />}
                        onChange={({min}) => console.log(`value = ${min}`)}
                    />
                </div>
            </Container>

            <Container padding="py-[48px] px-8">
                <div className="flex w-full flex-col gap-[48px]">
                    <SliderDual
                        min={100}
                        max={1000}
                        onChange={({min, max}) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                    <SliderDual
                        min={1899}
                        max={24999}
                        tooltipChildren={"$"}
                        onChange={({min, max}) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                </div>
            </Container>
        </>
    );
}
