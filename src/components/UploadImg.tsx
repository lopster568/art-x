"use client"
import { StepForward } from "lucide-react";
import { useRouter } from "next/navigation";
import Redeem from '@/components/animations/redeem.json';
import { Player } from '@lottiefiles/react-lottie-player';
// @ts-ignore
import FileBase64 from "react-file-base64";
const UploadImg = () => {
    // const [loading, setLoading] = useState(false)
    const router = useRouter()
    const submitHandler = async ({ base64 }: { base64: string }) => {
        const payload = { "img_uri": base64 }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/extract-token`, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        const { tid } = await res.json()
        router.push(`/redeem-pay/${tid}`)
    }

    // const handleClick = () => {
    //     setLoading(true)
    // }
    return (
        <>
            <div className="border border-dashed mx-auto border-gray-500 py-4 px-4 flex gap-4 items-center" >
                <StepForward />
                <FileBase64
                    onDone={({ base64 }: { base64: string }) => submitHandler({ base64 })}
                />
            </div>
            {/* {
                !loading ? (
                    <div className="flex w-full justify-center py-4 items-center" >
                        <h1 className="text-center text-3xl" >Processing ...</h1>
                        <Loader2 className="ml-4 w-8 h-8 font-normal animate-spin" />
                    </div>
                ) : null
            } */}

            <Player
                autoplay
                className=" rounded-full"
                src={Redeem}
                loop
            />
        </>
    );
}

export default UploadImg;