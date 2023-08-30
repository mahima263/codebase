import React from 'react'
import img3 from '../assets/img3.png'

const Lists = () => {
  return (
    <div className='grid grid-cols-1 place-items-center mt-5 mb-5'>
        <div className='flex flex-row justify-between shadow-lg border border-gray-200 rounded-lg  mb-5 px-4'>
        <div className=' py-1 mr-11 pl-8 text-gray-700 text-sm sm:text-lg'> Why Mern ? Is it Good Technology</div>
        <div className='pl-11 ml-11'><img  className='h-6 w-6 mt-1 ml-11 mr-8' src={img3} alt="img3"/></div>
        </div>
        <div className='flex flex-row justify-between shadow-lg border border-gray-200 rounded-lg  mb-5'>
        <div className='px-2 py-1 mr-7 pl-8 text-gray-700 text-sm sm:text-lg'> Here My source code is secure or not ? </div>
        <div className='pl-11 ml-11'><img  className='h-6 w-6 mt-1 ml-11 mr-11' src={img3} alt="img3"/></div>
        </div>
        <div className='flex flex-row justify-between shadow-lg border border-gray-200 rounded-lg mb-5 px-10'>
        <div className='px-5 py-1 mr-11 pl-11 text-gray-700 text-sm sm:text-lg'> Why Mern Stack is Famous ?</div>
        <div className='pl-11 ml-11 '><img  className='h-6 w-6 mt-1 ml-11 ' src={img3} alt="img3"/></div>
        </div>
        <div className='flex flex-row justify-between shadow-lg border border-gray-200 rounded-lg  mb-5 px-10'>
        <div className=' py-1 mr-11 pl-11 text-gray-700 text-sm sm:text-lg px-11'> <h1 className='px-8 pr-11'>What  is iMeet ? </h1></div>
        <div className='pl-11 ml-11'><img  className='h-6 w-6 mt-1 ml-11 mr-2' src={img3} alt="img3"/></div>
        </div>
        <div className='flex flex-row justify-between shadow-lg border border-gray-200 rounded-lg  mb-5 mr-11'>
        <div className='px-4 py-3 mr-11 text-gray-700 text-sm sm:text-lg'>Join us at iMeet and unlock a world of opportunities! Engage with industry experts, collaborate with like-minded peers, and gain hands-on experience in cutting-edge technologies. Our platform fosters a community of growth, where students can expand their knowledge, sharpen their skills, and explore their passions.</div>
        </div>


    </div>
  )
}

export default Lists