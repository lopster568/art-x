import { db } from "@/lib/firebase.config";
import { collection, doc, updateDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { action: string } }) {
    const { action } = params;
    const { tid } = await request.json()
    //check header and verify that request is sent from admin
    switch (action) {
        case "approve":
            try {
                const { img } = await (await fetch(`${process.env.BASE_URL}/api/generate-img/${tid}`)).json()
                const transactionRef = collection(db, "transactions")
                await updateDoc(doc(transactionRef, tid), { approve: 1, img })
                return NextResponse.json({"action" : "approve"})
            } catch (err) {
                console.log(err)
            }
        case "reject":
            try {
                const transactionRef = collection(db, "transactions")
                await updateDoc(doc(transactionRef, tid), { approve: -1 })
                return NextResponse.json({"action" : "reject"})
            } catch (err) {
                console.log(err)
            }
    }
}