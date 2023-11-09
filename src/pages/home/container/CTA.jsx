import React from 'react'
import { images } from '../../../constants'
import NewsletterSubscribe from '../../../components/Footer/NewsLetterSubscribe'
const CTA = () => {
  return (
    <>

<svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
<section className='relative bg-dark-hard px-5'>
    <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center '>
        <div className='col-span-12 lg:col-span-6'>
    <NewsletterSubscribe/>

{/* </div> */}
<p className='text-dark-light text-sm leading-7 mt-6 text-center md:text-center md:text-base lg:text-left'><span className='font-bold italic text-[#b3bac5] md:not-italic md:font-normal md:text-dark-light '>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a response the following day</p>
        </div>
        <div className='col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last '>
            <div className='w-3/4 mx-auto relative'>
                <div className='w-1/2 h-1/2 bg-[#fc5a5a] rounded-lg absolute top-[10%] -right-[8%]'/>
                <div className='w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]'/>
            <div className='w-full bg-white z-[1] relative  rounded-xl'>
      <img src={images.CTAImage} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl-60'/>
      <div className='p-5'>
<h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]  '>Future of work</h2>
<p className='text-dark-light mt-3 text-sm md:text-lg '>Majority of poeple work in jobs that dont exists today.</p>

      </div>
    </div>
            </div>

        </div>
    </div>

</section>
    </>
  )
}

export default CTA
