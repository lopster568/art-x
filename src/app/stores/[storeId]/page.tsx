import { MakePaymentForm } from "@/components/MakePaymentForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
    return (
        <MaxWidthWrapper className='mb-12 mt-24 sm:mt-28 flex flex-col items-center justify-center text-center'>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                Make a{' '}
                <span className='text-blue-600'>payment</span>{' '}
                now!
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

                    <div>
                        <div className='mx-auto min-w-max max-w-2xl p-6'>
                            <div className='mt-16 flow-root sm:mt-24'>
                                <div className='text-left -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
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