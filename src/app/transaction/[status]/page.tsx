import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = async ({
    params,
    searchParams,
}: {
    params: { status: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const { status } = params;
    const { tid } = searchParams;
    interface Transaction {
        amount: string,
        img: string,
        completed: boolean,
        timestamp: string,
        uid: string,
    }

    if (status === "success") {
        //get transaction from db
        try {
            const transactionRef = collection(db, "transactions")
            const transaction = (await getDoc(doc(transactionRef, tid?.toString()))).data() as Transaction;

            return (
                <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
                    <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                        Transaction{' '}
                        <span className='text-green-400'>Successfull</span>{' '}
                        !!
                    </h1>
                    <div>
                        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div className='-m-2 flex flex-col sm:flex-row rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                    <div className="flex flex-col justify-center" >
                                        <Image
                                            src={transaction!.img}
                                            alt='product preview'
                                            width={500}
                                            height={500}
                                            quality={100}
                                            className='rounded-md mb-4 bg-white p-2 shadow-2xl ring-1 ring-gray-900/10'
                                        />
                                        <a download="Pay.jpeg" href={transaction!.img} className={buttonVariants()} >Download Transaction Img<Download className="ml-4" /></a>
                                    </div>
                                    <div className="p-4" >
                                        <h1 className="text-2xl mb-4 text-gray-600 text-left" >Transaction Details</h1>
                                        <div className="text-left" >
                                            <p><span className="font-bold" >Amount: </span>{transaction.amount}$</p>
                                            <p><span className="font-bold" >CreatedAt: </span>{transaction.timestamp}</p>
                                            <p><span className="font-bold" >StoreId: </span>{transaction.uid}</p>
                                            <p><span className="font-bold" >UserId: </span>{transaction.uid}</p>
                                            <p><span className="font-bold" >Completed: </span>{transaction.completed ? "True": "False"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            );
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            Not Succesfull try again
        </div>
    )
}

export default Page;