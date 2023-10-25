import React from 'react'
import {images} from '../constants'
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {BsGithub, BsHeart, BsTelegram, BsYoutube} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='bg-dark-hard'>
<footer className='container mx-auto grid grid-cols-10 px-5 py-10  gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10 '>
<div className='col-span-5 md:col-span-4 lg:col-span-2'>
<h3 className='text-dark-light font-bold md:text-lg' >Product</h3>
<ul className='text-[#959ead] text-sm mt-5 space-y-4'>
  <li>
    <a href="/">LandingPage</a>
  </li>
  <li>
    <a href="/">Features</a>
  </li>
  <li>
    <a href="/">Documentation</a>
  </li>
  <li>
    <a href="/">Referal Program</a>
  </li>
  <li>
    <a href="/">Pricing</a>
  </li>

</ul>
</div>
<div className='col-span-5 md:col-span-4 lg:col-span-2'>
<h3 className='text-dark-light font-bold md:text-lg' >Services</h3>
<ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
  <li>
    <a href="/">Documentation</a>
  </li>
  <li>
    <a href="/">Design</a>
  </li>
  <li>
    <a href="/">Themes</a>
  </li>
  <li>
    <a href="/">Illustrations</a>
  </li>
  <li>
    <a href="/">UI Kit</a>
  </li>

</ul>
</div>
<div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto' >
<h3 className='text-dark-light font-bold md:text-lg' >Company</h3>
<ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
  <li>
    <a href="/">About</a>
  </li>
  <li>
    <a href="/">Terms</a>
  </li>
  <li>
    <a href="/">Privacy Policy</a>
  </li>
  <li>
    <a href="/">Carrears</a>
  </li>

</ul>
</div>
<div className='col-span-5 md:col-span-4 lg:col-span-2' >
<h3 className='text-dark-light font-bold md:text-lg' >More</h3>
<ul className='text-[#959ead] text-sm mt-5 space-y-4 md:text-base'>
  <li>
    <a href="/">Documentation</a>
  </li>
  <li>
    <a href="/">License</a>
  </li>
  <li>
    <a href="/">Changelog</a>
  </li>


</ul>
</div>
<div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2' >
  <img src={images.Logo} alt="logo" className="w-16 object-cover rounded-full border-4 border-gray-300 hover:border-blue-200 shadow-lg hover:shadow-xl transition duration-300 mx-auto md:mx-0 lg:mx-auto" />
  <p className='text-sm text-dark-light text-center mt-4'>Dig into your imaginations and let the world know..</p>
  <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:text-left md:text-base md:justify-start'>
  <li><a href=""><AiOutlineTwitter className='w-6 h-auto'/></a> </li>
  <li><a href=""><BsYoutube className='w-6 h-auto'/></a> </li>
  <li><a href=""><AiFillInstagram className='w-6 h-auto'/></a> </li>
  <li><a href=""><FaFacebook className='w-6 h-auto'/></a> </li>
  <li><a href=""><BsGithub className='w-6 h-auto'/></a> </li>
  <li><a href=""><BsTelegram className='w-6 h-auto'/></a> </li>
  </ul>
</div>
<div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
<div className='bg-primary text-white p-3 rounded-full '>
  <BsHeart className='w-7 h-auto'/>
</div>
<p className='font-bold italic text-dark-light '> crafted with love </p>
</div>
</footer>
    </section>
  )
}

export default Footer
