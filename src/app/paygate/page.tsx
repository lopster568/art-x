import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { PayGateForm } from "@/components/PayGateForm";
import TextAnimation from "@/components/TextAnimation";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, CornerRightUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = (
    { params, searchParams }: {
        params: { slug: string }
        searchParams: { [key: string]: string | string[] | undefined }
    }
) => {
    const sid = searchParams["sid"] as String
    return (
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
            <TextAnimation>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Pay to the store!
                </h1>
            </TextAnimation>
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

                    <div>
                        <div className='mx-auto min-w-max max-w-2xl p-6'>
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div className='text-left flex flex-col md:flex-row gap-8 items-center -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                    <div>
                                        <PayGateForm sid={sid.toString()}>
                                            <div className="flex flex-col md:hidden" >
                                                <p className="text-lg font-bold" >Pay at: </p>
                                                <p className=" text-4xl">something@upi</p>
                                                <Link href={"upi://pay?pa=8800429879@paytm&pn=ROSHAN_SINGH&mc=0000&mode=02&purpose=00&orgid=159761&cust=337841979"} className={`${buttonVariants({ size: "lg" })} text-center my-2 md:hidden`} >Pay with UPI APP <ArrowUpRight /></Link>
                                                <h1 className="text-lg font-bold my-2" >OR</h1>
                                                <Image alt="qr" className="self-center" width={300} height={300} src={"/qr.webp"} />
                                                <h1 className="text-lg font-bold my-2 text-center" >Scan to Pay</h1>
                                            </div>
                                        </PayGateForm>
                                        <p className="text-sm mt-2" >Your storeId: {sid}</p>
                                    </div>
                                    <div className="h-72 mx-4 border border-black hidden md:block" />
                                    <div className="flex flex-col hidden md:block" >
                                        <p className="text-lg font-bold" >Pay at: </p>
                                        <p className=" text-4xl">something@upi</p>
                                        <Link href={"upi://pay?pa=8800429879@paytm&pn=ROSHAN_SINGH&mc=0000&mode=02&purpose=00&orgid=159761&cust=337841979"} className={`${buttonVariants({ size: "lg" })} text-center my-2 md:hidden`} >Pay with UPI APP <ArrowUpRight /></Link>
                                        <h1 className="text-lg font-bold my-2" >OR</h1>
                                        <Image alt="qr" className="self-center" width={300} height={300} src={"/qr.webp"} />
                                        <h1 className="text-lg font-bold my-2 text-center" >Scan to Pay</h1>
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
}

export default Page;