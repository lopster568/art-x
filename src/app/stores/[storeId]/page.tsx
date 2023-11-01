import { MakePaymentForm } from "@/components/MakePaymentForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";

const Page = () => {
    return (
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
            <TextAnimation>
                <h1 className='text-5xl md:text-left md:self-start text-zinc-800 font-bold md:text-6xl lg:text-7xl'>
                    Welcome to TokyoMall
                </h1>
            </TextAnimation>
            <p className='mt-5 max-w-4xl text-zinc-700 sm:text-lg md:text-left md:self-start'>
                Description for TokyoMall Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mollis quam. Duis id cursus risus. Mauris lacinia, orci luctus sollicitudin ultricies, risus ex tristique nibh, nec commodo nisl justo non lectus. Quisque blandit augue id felis convallis posuere. In hac habitasse platea dictumst. Class
            </p>
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
                    <div className="flex items-center flex-col-reverse gap-4 md:flex-row md:gap-0" >
                        <div className='mx-auto max-w-sm p-6'>
                            <div className='md:mt-16 flow-root sm:mt-24'>
                                <div className='text-left -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                    <Image
                                        src='https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80'
                                        alt='uploading preview'
                                        width={1419}
                                        height={732}
                                        quality={100}
                                        className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto max-w-2xl p-6'>
                            <div className='md:mt-16 flow-root sm:mt-24'>
                                <div className='text-left -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                                    <div className="pt-2 pb-6 max-w-sm" >
                                        <h1 className='text-5xl text-left self-start font-semibold'>
                                            One last step!{' '}
                                        </h1>
                                        <p className='mt-5 max-w-lg text-zinc-700 sm:text-lg text-left self-start'>
                                            Enter your storeId to continue with payment. If you don't have a storeId, please contact your store
                                        </p>
                                    </div>
                                    <MakePaymentForm />
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