import { faker } from "@faker-js/faker"
// @ts-ignore
import imageDataURI from "image-data-uri"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest, { params }: any) => {
    const { token } = params
    try {
        const img = faker.image.url()
        const imgUri = await imageDataURI.encodeFromURL(img) as String
        const payload = `token/${token}`
        return Response.json({ img: imgUri.replaceAll("=", "X") + payload})
    } catch (err) {
        console.log(err)
    }
}