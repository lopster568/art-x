import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <MaxWidthWrapper className='w-screen h-screen flex flex-col items-center justify-center text-center' >
            <div className="flex gap-8 items-center" >
                <h1 className='max-w-4xl text-5xl font-semibold'>
                    Loading ...
                </h1>
                <div className="animate-bounce transition-all text-center text-5xl" >🚀</div>
            </div>
        </MaxWidthWrapper>
    )
}