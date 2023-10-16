import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
    const storeId = "tokyo_mall_12"
    return (
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                Explore Our Handpicked{' '}
                <span className='text-blue-600'>Stores</span>{' '}
            </h1>
            <div>
                <div className='relative isolate'>
                    {/* <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        />
                    </div> */}

                    <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
                        <Card className="w-[350px] text-left -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                            <CardHeader>
                                <Image
                                    src='https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80'
                                    alt='uploading preview'
                                    width={1419}
                                    height={732}
                                    quality={100}
                                    className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                                />
                                <CardTitle className="text-zinc-800" >Tokyo Mall</CardTitle>
                                <CardDescription>Deploy your new project in one-click. Tokyo mall lorem usa osi isqs isaoisds oioas.</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href={`/stores/${storeId}`} className={`${buttonVariants({ size: 'lg' })} w-full`} >Visit Now <ArrowRight className="ml-4" /> </Link>
                            </CardFooter>
                        </Card>
                    </MaxWidthWrapper>

                    {/* <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                        />
                    </div> */}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default Page;