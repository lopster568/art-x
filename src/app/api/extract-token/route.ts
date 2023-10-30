import { db } from "@/lib/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const data = await request.json()
    const { img_uri } = data

    //extract payload from img
    const tid = img_uri.split("token/")[1]
    //get transaction from db
    // try {
    //     const transactionRef = collection(db, "transactions")
    //     const transaction = (await getDoc(doc(transactionRef, tid))).data()

    //     return ( 
    //         Response.json({transaction})
    //      );
    // } catch (err) {
    //     console.log(err)
    // }

    return Response.json({ tid })

}
