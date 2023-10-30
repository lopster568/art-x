import cryptoRandomString from "crypto-random-string"
import { setDoc, doc, collection } from "firebase/firestore"
import { db } from '@/lib/firebase.config';

export const POST = async (request: Request) => {
    const data = await request.json()
    const { sid, amount } = data

    //Generating a random transaction id
    const tid = cryptoRandomString({length: 10})

    interface transaction {
        img: string,
        amount: number,
        timestamp: string,
        completed: boolean,
        sid: string
    }

    //Creating Transaction
    try {
        const { img } = await (await fetch(`${process.env.BASE_URL}/api/generate-img/${tid}`)).json()
        const transaction: transaction = {
            img, amount, sid,
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
