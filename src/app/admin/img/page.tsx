import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { db } from "@/lib/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import Image from "next/image";

interface Transaction {
    invoice_img: string,
}

const Page = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    const { tid } = searchParams;
    const invoice_img = await getInvoiceImg(tid)
    return (
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
            <Image src={invoice_img.toString()} width={500} height={500} alt="ss" />
        </MaxWidthWrapper>
    );
}

const getInvoiceImg = async (tid: string) => {
    const transactionRef = collection(db, "transactions")
    const transaction = (await getDoc(doc(transactionRef, tid?.toString()))).data() as Transaction
    return (transaction.invoice_img)
}

export default Page;