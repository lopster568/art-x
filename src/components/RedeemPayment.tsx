"use client"
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";

const RedeemPayment = ({ tid }: { tid: string }) => {
    const redeemPayment = async () => {
        try {
            const transactionRef = collection(db, "transactions")
            console.log(tid)
            await updateDoc(doc(transactionRef, tid.toString()), {
                completed: true
            })
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <button onClick={redeemPayment} className={buttonVariants({
            size: 'lg',
        })} >REEDEM NOW <ArrowUpRight />
        </button>
    );
}

export default RedeemPayment;