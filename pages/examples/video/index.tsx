import {Video} from "@/core/ui/components";
import {Container} from "@/core/ui/layers";

export default function VideoPage() {
    return (
        <>
            <Container className="mx-[12px] h-[440px] flex-col items-center justify-center gap-[172px] px-[72px] sm:h-[400px] sm:flex-row">
                <Video
                    className="h-[240px] w-[240px] animate-[blob-short_10s_linear_infinite] rounded-full"
                    src="/material-me/video.mp4"
                />
            </Container>
        </>
    );
}
