import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/firebase.config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface transaction {
    invoice_img: string,
    img: string,
    amount: number,
    timestamp: string,
    completed: boolean,
    approve: Number,
    sid: string,
    uid: string
}

const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();
    if (user) {
        const userTransactions = await getUserTransactions(user.id!) as any;
        console.log(userTransactions)
        return (
            <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Your {' '}
                    <span className='text-blue-600'>Transactions</span>
                </h1>
                <div>
                    {
                        userTransactions.length === 0 ? (
                            <div className="flex flex-col justify-center items-center mt-12" >
                                <h1 className="text-3xl text-gray-600" >No Transactions Found</h1>
                                <p className="text-gray-500" >You don't have any transactions yet.</p>
                                <Link href="/stores" className={`${buttonVariants({ size: "lg" })} my-8`} >Make a Payment</Link>
                            </div>
                        ) :
                            userTransactions.map((transaction: transaction) => (
                                <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                                    <div className='mt-16 flow-root sm:mt-24'>
                                        <div className='-m-2 flex flex-col sm:flex-row rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                            {
                                                transaction.approve !== 1 ? (
                                                    <div className="flex flex-col justify-center w-1/2" >
                                                        {
                                                            transaction.approve === 0 ? (
                                                                (
                                                                    <>
                                                                        <h1 className="text-2xl text-green-600  font-bold" >Approval Pending</h1>
                                                                        <p>Our team currently processing your payment!</p>
                                                                    </>
                                                                )
                                                            ) : (
                                                                (<>
                                                                    <h1 className="text-2xl text-red-600 font-bold" >Rejected</h1>
                                                                    <p>Your payment has been rejected if the amount is deducted it will be reflected back into your account in 3-4 bussiness days.</p>
                                                                </>)
                                                            )
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col justify-center" >
                                                        <Image
                                                            src={transaction!.img}
                                                            alt='product preview'
                                                            width={500}
                                                            height={500}
                                                            quality={100}
                                                            className='rounded-md mb-4 bg-white p-2 shadow-2xl ring-1 ring-gray-900/10'
                                                        />
                                                    </div>
                                                )
                                            }

                                            <div className="p-4" >
                                                <h1 className="text-2xl mb-4 text-gray-600 text-left" >Transaction Details</h1>
                                                <div className="text-left" >
                                                    <p><span className="font-bold" >Amount: </span>{transaction.amount}₹</p>
                                                    <p><span className="font-bold" >CreatedAt: </span>{transaction.timestamp}</p>
                                                    <p><span className="font-bold" >StoreId: </span>{transaction.uid}</p>
                                                    <p><span className="font-bold" >UserId: </span>{transaction.uid}</p>
                                                    <p><span className="font-bold" >Completed: </span>{transaction.completed ? "True" : "False"}</p>
                                                </div>
                                                {
                                                    transaction.approve === 1 ? (
                                                        <a download="Pay.jpeg" href={transaction!.img} className={`${buttonVariants({ size: "lg" })} my-8 w-full`} >Download Transaction Img<Download className="ml-4" /></a>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }

                </div>

                <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
                    <div className='mb-12 px-6 lg:px-8'>
                        <div className='mx-auto max-w-2xl sm:text-center'>
                            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                                What's Next?
                            </h2>
                            <p className='mt-4 text-lg text-gray-600'>
                                The modern day soliution for peer to peer transaction using transaction images.
                            </p>
                        </div>
                    </div>
                    {/* steps */}
                    <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                        <li className='md:flex-1'>
                            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                                <span className='text-sm font-medium text-blue-600'>
                                    1
                                </span>
                                <span className='text-xl font-semibold'>
                                    Keep Transaction in images
                                </span>
                                <span className='mt-2 text-zinc-700'>
                                    Keep your transaction stored in an image!
                                    {' '}
                                </span>
                            </div>
                        </li>
                        <li className='md:flex-1'>
                            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                                <span className='text-sm font-medium text-blue-600'>
                                    2
                                </span>
                                <span className='text-xl font-semibold'>
                                    Pay to a peer
                                </span>
                                <span className='mt-2 text-zinc-700'>
                                    We&apos;ll process your transaction when someone redeems your payment on our website
                                </span>
                            </div>
                        </li>
                        <li className='md:flex-1'>
                            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                                <span className='text-sm font-medium text-blue-600'>
                                    3
                                </span>
                                <span className='text-xl font-semibold'>
                                    Enjoy our security
                                </span>
                                <span className='mt-2 text-zinc-700'>
                                    It&apos;s that simple to keep your transaction secure and hassle free.
                                </span>
                            </div>
                        </li>
                    </ol>
                </div>
            </MaxWidthWrapper>
        );
    } else {
        return (
            <MaxWidthWrapper className="w-screen flex flex-col justify-center mt-24" >
                <h1 className="text-4xl text-center" >Error 403 Forbidden</h1>
                <div className="self-center my-4" >
                    <Link href="/" className={buttonVariants({ size: "lg" })} >Go back</Link>
                </div>
            </MaxWidthWrapper>
        )
    }
}

const getUserTransactions = async (uid: string) => {
    // fetch user transactions
    const transactionsRef = collection(db, 'transactions');
    const q = query(transactionsRef, where('uid', '==', uid.toString()), orderBy('timestamp', 'desc'));
    const transactions = await getDocs(q);
    const userTransactions = transactions.docs.map(doc => doc.data());
    return userTransactions
}


export default Page;