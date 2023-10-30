"use client"
import FileBase64 from "react-file-base64"
import { useRouter } from "next/navigation"

const UploadImg = () => {
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
    return (
        <FileBase64
            onDone={({ base64 }: { base64: string }) => submitHandler({ base64 })}
        />
    );
}

export default UploadImg;