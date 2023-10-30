import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RedeemPayment from "@/components/RedeemPayment";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/firebase.config";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Transaction {
    amount: string,
    img: string,
    completed: string,
    timestamp: string,
    uid: string,
}

const Page = async ({ params }: { params: { tid: string } }) => {
    const { tid } = params;

    try {
        const transactionRef = collection(db, "transactions")
        const transaction = (await getDoc(doc(transactionRef, tid))).data() as Transaction
        const { amount, img, completed, timestamp } = transaction;
        return (
            <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center' >
                <div>
                    <p className='text-2xl font-bold text-left'>Amount: </p>
                    <p className='text-5xl font-bold text-left'>${amount}</p>

                    <Image
                        src={img}
                        alt='product preview'
                        width={500}
                        height={500}
                        quality={100}
                        className='rounded-md mb-4 bg-white p-2 shadow-2xl ring-1 ring-gray-900/10'
                    />
                    <p className="text-sm text-gray-500 mb-4" >{timestamp}</p>

                    {
                        !completed ? (
                            <RedeemPayment tid={tid} />
                        ) : (
                            <p className='max-w-lg text-2xl font-bold' >Your payment has already been redeemed thanks for transacting with us!</p>
                        )
                    }
                </div>
            </MaxWidthWrapper>
        )
    } catch (error) {
        console.log(error);
        return <div>Error</div>
    }
}

export default Page;