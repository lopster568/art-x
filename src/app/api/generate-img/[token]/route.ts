import { NextRequest, NextResponse } from "next/server"
import { faker } from "@faker-js/faker"
import imageDataURI from "image-data-uri"
import { useSearchParams } from "next/navigation"

export const GET = async (req: NextRequest, { params }: any) => {
    const { token } = params
    try {
        const img = faker.image.url()
        const imgUri = await imageDataURI.encodeFromURL(img)
        return Response.json({ img: imgUri + "token" + token })
    } catch (err) {
        console.log(err)
    }
}