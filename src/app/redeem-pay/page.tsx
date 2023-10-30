import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadImg from "@/components/UploadImg";
const Page = () => {
    
    return (
        <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center' >
            <UploadImg />
        </MaxWidthWrapper>
    )
}

export default Page;