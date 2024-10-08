import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, CheckIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                <div className="relative mx-auto text-center lg:text-left 
                flex flex-col items-center lg:items-start">
                  <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                     <img src="/snake-1.png" className="w-full"/>                   
                  </div>
                  <h1
                  className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"
                  >Your Image on a <span className=' bg-pink-300 px-2 text-white'>Custom</span> Phone Case</h1>
                  <p className="mt-8 text-lg lg:pr-10 max-w-pros text-center lg:text-left text-balance md:text-wrap">
                      Capture your favourite memmories with your own,
                      <span className="font-semibold">one of the</span> phone case.
                      CaseStore is a simple and easy to use app that allows you to create your own custom phone case.
                  </p>
                  <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                     <div className="space-y-2">
                        <li className="flex gap-1.5 items-center text-left">
                          <CheckIcon className='h-5 w-5 shrink-0 text-purple-500' />
                            High Quality, Durable Material
                        </li>

                        <li className="flex gap-1.5 items-center text-left">
                          <CheckIcon className='h-5 w-5 shrink-0 text-purple-500' />
                            5 year warranty
                        </li>

                        <li className="flex gap-1.5 items-center text-left">
                          <CheckIcon className='h-5 w-5 shrink-0 text-purple-500' />
                           Modern mobiles support
                        </li>
                     </div>
                  </ul>

                  <div className="flex flex-col sm:flex-row mt-12 items-center
                   gap-5">
                      <div className="flex -space-x-4">
                          <img className="inline-block h-10 w-10 rounded-full
                          ring-2 ring-slate-100" src={'/users/user-1.png'} alt="user" />
                          <img className="inline-block h-10 w-10 rounded-full
                          ring-2 ring-slate-100" src={'/users/user-2.png'} alt="user" />
                          <img className="inline-block h-10 w-10 rounded-full
                          ring-2 ring-slate-100" src={'/users/user-3.png'} alt="user" />
                          <img className="inline-block h-10 w-10 rounded-full
                          ring-2 ring-slate-100" src={'/users/user-4.jpg'} alt="user" />
                          <img className="inline-block h-10 w-10 rounded-full
                          ring-2 ring-slate-100 object-cover" src={'/users/user-5.jpg'} alt="user" />
                      </div>

                      <div className="flex flex-col justify-between items-center sm:items-start">
                          <div className="flex gap-0.5">
                              <Star className="h-4 w-4 text-pink-300 fill-pink-300"/>
                              <Star className="h-4 w-4 text-pink-300 fill-pink-300"/>
                              <Star className="h-4 w-4 text-pink-300 fill-pink-300"/>
                              <Star className="h-4 w-4 text-pink-300 fill-pink-300"/>
                              <Star className="h-4 w-4 text-pink-300 fill-pink-300"/>
                          </div>
                          <p>
                            <span className="font-semibold">1,250 </span>
                             happy customers
                          </p>
                      </div>
                  </div>
                </div>
            </div>


            <div className="cols-span-full lg:cols-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
                <div className="relative md:max-w-xl">
                    <img src={'/your-image.png'} className="w-40 lg:w-52 absolute left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
                    <img src={'/line.png'} className="absolute w-20 -left-6 -bottom-6 select-none"/>
                    <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
                </div>
            </div>
          </MaxWidthWrapper>
      </section>


      {/*value proposition section*/}
      <section className="bg-slate-100 py-24 ">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  What our <span className="relative px-2">customers
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-pink-300"/>
                  </span> say
              </h2>
              <img src={'/snake-2.png'} className="w-24 order-0 lg:order-2"/>
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20">
                  <div className="flex gap-0.5 mb-2">
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                  </div>
                  <div className="text-lg leading-8">
                      <p>"The Case Store is the best way to store your phone case. It's easy to use and has a high quality material."</p>
                  </div>

                  <div className="flex gap-4 mt-2 items-center">
                      <img className="rounded-full h-12 w-12 object-cover"
                      src={'/users/user-1.png'}
                      />
                      <div className="flex flex-col">
                          <p className="font-semibold">Messiahh</p>
                          <div className="flex gap-1.5 items-center text-zinc-600">
                              <Check className="h-4 w-4 stroke-[3px] text-purple-500"/>
                              <p className="text-sm">verified purchase</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20">
                  <div className="flex gap-0.5 mb-2">
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                      <Star className="h-5 w-5 text-pink-300 fill-pink-300"/>
                  </div>
                  <div className="text-lg leading-8">
                      <p>"Nice app, I'm using it for years. It's easy to use and has a high quality material."</p>
                  </div>

                  <div className="flex gap-4 mt-2 items-center">
                      <img className="rounded-full h-12 w-12 object-cover"
                      src={'/users/user-2.png'}
                      />
                      <div className="flex flex-col">
                          <p className="font-semibold">Cosmic</p>
                          <div className="flex gap-1.5 items-center text-zinc-600">
                              <Check className="h-4 w-4 stroke-[3px] text-purple-500"/>
                              <p className="text-sm">verified purchase</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews/>
        </div>
      </section>

      <section>
            <MaxWidthWrapper className="py-24">
                <div className="mb-12 px-6 lg:px-8">
                    <div className='mx-auto max-w-2xl sm:text-center'>
                            <h2 className="order-1 mt-2 tracking-tight text-center !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                        Upload your photo and get <span className="relative px-2 text-white bg-pink-300">your own case
                        </span> now
                            </h2>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl lg:px-8 px-6 ">
                    <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
                        <img src={'/arrow.png'} className="absolute md:top-1/2 top-[25rem] -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"/>
                        <div className="md:h-full w-full relative h-80 md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                            <img src={'/horse.jpg'} className="rouned-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"/>
                        </div>
                        <Phone className="w-60" imgSrc="horse_phone.jpg"/>
                    </div>
                </div>

                <ul className="max-w-prose mx-auto mt-12 sm:text-lg space-y-2 w-fit">
                    <li className="w-fit">
                        <Check className="h-5 w-5 text-purple-500 inline mr-1.5"/>
                        High qualtiy material
                    </li>
                    <li className="w-fit">
                        <Check className="h-5 w-5 text-purple-500 inline mr-1.5"/>
                        5 year warranty
                    </li>
                    <li className="w-fit">
                        <Check className="h-5 w-5 text-purple-500 inline mr-1.5"/>
                      Scratch and fingerprint resistant
                    </li>
                    <li className="w-fit">
                        <Check className="h-5 w-5 text-purple-500 inline mr-1.5"/>
                        Wireless charging
                    </li>
                    <li className="w-fit">
                        <Check className="h-5 w-5 text-purple-500 inline mr-1.5"/>
                         Compatible with all mobiles
                    </li>

                    <div className="flex justify-center">
                        <Link href={'/configure/upload'}
                        className={
                            buttonVariants({
                                size:'lg',
                                className:'mx-auto mt-8'
                            })
                        }
                        >
                            Create your own case <ArrowRight className="h-4 w-4 ml-1"/>
                        </Link>
                    </div>
                </ul>
            </MaxWidthWrapper>
      </section>
    </div>
  ); 
}
