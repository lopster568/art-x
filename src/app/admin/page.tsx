import AdminActonBtn from "@/components/AdminActionBtn";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/firebase.config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { collection, getDocs } from "firebase/firestore";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface transaction {
    invoice_img: string,
    amount: number,
    timestamp: string,
    completed: boolean,
    approve: Number,
    sid: string,
    id: string
}

const Page = async () => {
    const { getUser, getPermission } = getKindeServerSession();
    const user = getUser();
    const isAdmin = getPermission("admin").isGranted
    const { approvedTransactions, rejectedTransactions, pendingTransactions } = await getAllTransactions() as any
    if (user && isAdmin) {
        return (
            <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
                <h1 className='max-w-4xl text-3xl font-bold md:text-3xl lg:text-3xl'>
                    Admin{' '}
                    <span className='text-blue-600'>Dashboard</span>{' '}
                </h1>
                <div>
                    <div className='relative isolate'>
                        <div
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                            />
                        </div>

                        {/* Pending  */}
                        <div>
                            <div className='mx-auto min-w-max max-w-2xl p-6'>
                                <div className='mt-2 flow-root'>
                                    <div className='text-left flex flex-col -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                        <div className="relative overflow-x-auto rounded-md">
                                            <p className="pb-4 text-lg text-blue-700 font-bold" >Pending Transactions</p>
                                            <table className="w-full rounded-md text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            TransactionID
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Amt
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Screenshot
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Action
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Timestamp
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        pendingTransactions.map((transaction: transaction, i: number) => (
                                                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th
                                                                    scope="row"
                                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                >
                                                                    {transaction.id}
                                                                </th>
                                                                <td className="px-6 py-4">{transaction.amount}₹</td>
                                                                <td className="px-6 py-4"><Link href={`/admin/img?tid=${transaction.id}`} className={buttonVariants({})} target="_blank" >View <ArrowUpRight className="ml-2" /> </Link></td>
                                                                <td className="px-6 py-4 flex gap-4 items-center align-middle">
                                                                    <AdminActonBtn tid={transaction.id} />
                                                                </td>
                                                                <td className="px-6 py-4">{transaction.timestamp.split("GMT")[0]}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Approved  */}
                        <div>
                            <div className='mx-auto min-w-max max-w-2xl p-6'>
                                <div className='mt-2 flow-root'>
                                    <div className='text-left flex flex-col -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                        <div className="relative overflow-x-auto rounded-md">
                                            <p className="pb-4 text-lg text-green-700 font-bold" >Approved Transactions</p>
                                            <table className="w-full rounded-md text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            TransactionID
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Amt
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Screenshot
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Timestamp
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        approvedTransactions.map((transaction: transaction, i: number) => (
                                                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th
                                                                    scope="row"
                                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                >
                                                                    {transaction.id}
                                                                </th>
                                                                <td className="px-6 py-4">{transaction.amount}₹</td>
                                                                <td className="px-6 py-4"><Link href={`/admin/img?tid=${transaction.id}`} className={buttonVariants({})} target="_blank" >View <ArrowUpRight className="ml-2" /> </Link></td>
                                                                <td className="px-6 py-4">{transaction.timestamp.split("GMT")[0]}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* rejected  */}
                        <div>
                            <div className='mx-auto min-w-max max-w-2xl p-6'>
                                <div className='mt-2 flow-root'>
                                    <div className='text-left flex flex-col -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                        <div className="relative overflow-x-auto rounded-md">
                                            <p className="pb-4 text-lg text-red-400 font-bold" >Rejected Transactions</p>
                                            <table className="w-full rounded-md text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            TransactionID
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Amt
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Screenshot
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Timestamp
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        rejectedTransactions.map((transaction: transaction, i: number) => (
                                                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th
                                                                    scope="row"
                                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                >
                                                                    {transaction.id}
                                                                </th>
                                                                <td className="px-6 py-4">{transaction.amount}₹</td>
                                                                <td className="px-6 py-4"><Link href={`/admin/img?tid=${transaction.id}`} className={buttonVariants({})} target="_blank" >View <ArrowUpRight className="ml-2" /> </Link></td>
                                                                <td className="px-6 py-4">{transaction.timestamp.split("GMT")[0]}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                            />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        );
    } else {
        return (
            <MaxWidthWrapper className="w-screen flex flex-col justify-center mt-24" >
                <h1 className="text-4xl text-center" >Error 403 Forbidden</h1>
                <div className="self-center my-4" >
                    <Link href="/" className={buttonVariants({size: "lg"})} >Go back</Link>
                </div>
            </MaxWidthWrapper>
        )
    }
}

const getAllTransactions = async () => {
    try {
        const transactionsRef = collection(db, 'transactions')
        const transactions = await getDocs(transactionsRef)
        const approvedTransactions = [] as any | undefined
        const rejectedTransactions = [] as any | undefined
        const pendingTransactions = [] as any | undefined
        transactions.forEach(doc => {
            if (doc.data().approve === 1) {
                approvedTransactions.push({ ...doc.data(), id: doc.id })
            }
            else if (doc.data().approve === 0) {
                pendingTransactions.push({ ...doc.data(), id: doc.id })
            } else {
                rejectedTransactions.push({ ...doc.data(), id: doc.id })
            }
        })
        return ({ approvedTransactions, rejectedTransactions, pendingTransactions })
    } catch (err) {
        console.log(err)
    }
}

export default Page;