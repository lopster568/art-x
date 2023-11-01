import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadImg from "@/components/UploadImg";
const Page = () => {

    return (
        <MaxWidthWrapper className='flex flex-col items-center justify-center text-center' >
            <div>
                <div className='mx-auto min-w-max max-w-2xl'>
                    <div className='mt-16 flow-root sm:mt-24'>
                        <div className='text-left flex flex-col md:flex-row gap-8 items-center -m-2 rounded-xl bg-gray-900/10 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl'>
                            <div>
                                <h1 className=" text-4xl py-2 font-semibold text-gray-800">Choose Payment Image</h1>
                                <p className="pb-4 w-3/4" >Please choose a valid payment image to redeem your payment</p>
                                <UploadImg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-left mt-12'>
                How this {' '}
                <span className='text-blue-600'>Works!</span>{' '}
            </h1>
            <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                <li className='md:flex-1'>
                    <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4'>
                        <span className='text-sm font-medium text-blue-600'>
                            Step 1
                        </span>
                        <span className='text-xl font-semibold'>
                            Upload Payment Image
                        </span>
                        <span className='mt-2 text-zinc-700'>
                            Upload the payment image you want to redeem.
                            {' '}
                        </span>
                    </div>
                </li>
                <li className='md:flex-1'>
                    <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4'>
                        <span className='text-sm font-medium text-blue-600'>
                            Step 2
                        </span>
                        <span className='text-xl font-semibold'>
                            Verify Payment
                        </span>
                        <span className='mt-2 text-zinc-700'>
                            Verify if all the payment details are correct before redeeming.
                        </span>
                    </div>
                </li>
                <li className='md:flex-1'>
                    <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4'>
                        <span className='text-sm font-medium text-blue-600'>
                            Step 3
                        </span>
                        <span className='text-xl font-semibold'>
                            Receieve Payment
                        </span>
                        <span className='mt-2 text-zinc-700'>
                            It&apos;s that simple to receive payments by uploading the transaction image.
                        </span>
                    </div>
                </li>
            </ol>


        </MaxWidthWrapper>
    )
}

export default Page;