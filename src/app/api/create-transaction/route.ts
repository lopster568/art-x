import cryptoRandomString from "crypto-random-string"
import { setDoc, doc, collection } from "firebase/firestore"
import { db } from '@/lib/firebase.config';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const POST = async (request: Request) => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    const data = await request.json()
    const { sid, amount, invoice_img } = data
    //Generating a random transaction id
    const tid = cryptoRandomString({length: 10})

    interface transaction {
        invoice_img: string,
        amount: number,
        timestamp: string,
        completed: boolean,
        approve: Number,
        sid: string,
        uid: string
    }

    //Creating Transaction
    try {
        const transaction: transaction = {
            invoice_img, amount, sid, approve: 0, uid: user.id!,
            timestamp: (new Date(Date.now())).toString(),
            completed: false
        }
        const transactionRef = collection(db, "transactions")
        await setDoc(doc(transactionRef, tid), JSON.parse(JSON.stringify(transaction)))
        return Response.json({ tid })
    } catch (err) {
        console.log(err)
    }
}

//Use to extract token from img
// const extractToken = transaction.img.split("token/")[1]
