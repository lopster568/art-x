import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight, Sparkle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import AnimationPlayer from '@/components/AnimationPlayer'
import open from "@/components/animations/open.json"
import security from "@/components/animations/security.json"
import innovation from "@/components/animations/innovation.json"
import support from "@/components/animations/support.json"
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Transact with us today!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Make Seamless{' '}
          <span className='text-blue-600'>Payments</span>{' '}
          with Us
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          ART-x allows you to have peer to peer transactions with anyone.
          Simply make an account and start transaction right away.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/stores'
          target='_blank'>
          Make a Payment{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
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
          <MaxWidthWrapper className='rounded-md mb-12 mt-12 bg-white sm:mt-24 p-12 flex flex-col items-center justify-center text-center' >
            <div className='mx-auto max-w-5xl '>
              <div className='mb-12 px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl sm:text-center flex items-center gap-4 justify-center'>
                  <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                    Why choose Us
                  </h2>
                  <Sparkle />
                </div>
              </div>

              {/* steps */}
              <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                <li className='md:flex-1'>
                  <div className='flex flex-col space-y-2  md:pb-0 md:pl-0 md:pt-4 py-2 pl-4 '>
                    <span className='text-sm font-medium text-blue-600'>
                      <AnimationPlayer lottie={security} />
                    </span>
                    <span className='text-xl font-semibold border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 mt-4'>
                      Security
                    </span>
                    <span className='mt-2 text-zinc-700'>
                      We have integrated security to our core to ensure that your transactions are safe.
                      {' '}
                    </span>
                  </div>
                </li>
                <li className='md:flex-1'>
                  <div className='flex flex-col space-y-2  md:pb-0 md:pl-0 md:pt-4 py-2 pl-4 '>
                    <span className='text-sm font-medium text-blue-600'>
                      <AnimationPlayer lottie={innovation} />
                    </span>
                    <span className='text-xl font-semibold border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 mt-4'>
                      Innovative
                    </span>
                    <span className='mt-2 text-zinc-700'>
                      We proivde a never before way to make payments with transaction images.
                      {' '}
                    </span>
                  </div>
                </li>
                <li className='md:flex-1'>
                  <div className='flex flex-col space-y-2  md:pb-0 md:pl-0 md:pt-4 py-2 pl-4 '>
                    <span className='text-sm font-medium text-blue-600'>
                      <AnimationPlayer lottie={support} />
                    </span>
                    <span className='text-xl font-semibold border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 mt-4'>
                      Support
                    </span>
                    <span className='mt-2 text-zinc-700'>
                      Our team works around the clock to ensure that you have the best experience possible.
                      {' '}
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </MaxWidthWrapper>
          <div className='w-full' >
            <div className='mt-24 mx-auto max-w-6xl px-6 lg:px-8 flex flex-col md:flex-row gap-8 justify-around'>
              <div className='flex flex-col md:flex-col-reverse items-center justify-center text-center'>
                <AnimationPlayer lottie={open} />
                <h2 className='mt-2 font-semibold text-3xl text-gray-700 sm:text-5xl'>
                  Explore our stores today!
                </h2>
              </div>
              <div className='flow-root'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/dashboard-preview.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
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

      {/* Feature section */}
      <div className='mx-auto mb-12 mt-12 max-w-5xl sm:mt-24'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Start Paying!
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
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Create a new account on our platform to start making payments.
                {' '}
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Pay in a store
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your transaction in your favourite selection of store and get a transaction img.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
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
      </div>
      <Footer />
    </>
  )
}