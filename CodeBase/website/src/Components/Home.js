import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
 import Lists from './Lists'
const Home = () => {
  return (
    <div>
      
        <div className='grid grid-cols-1 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center mt-11'>
        <div> 
            <div className='text-gray-800 font-large text-5xl ml-11 pl-11 mr-5'>iMeet Codebase</div>
            <div className='ml-11 pl-11 mt-5 text-gray-700 font-medium mr-5'>Unlock the potential of seamless collaboration and efficient coding with iMeet, the leading codebase platform. Designed by developers for developers, iMeet is here to revolutionize the way you work, collaborate, and create.</div>
          <div className='flex flex-row-1'>
          <div className='ml-11 pl-11 mt-9 mr-8 '><button className='text-white bg-purple-700 px-6 py-2 rounded-xl ml-11'><a href='/Login'>Join Now</a></button></div>
          <div className='mt-9'><button className='text-gray-700 border border-purple-700 px-6 py-2 rounded-xl '>Upload Code</button></div>
          </div>
        </div>
        <div><img className="h-60 w-60 ml-11 pl-11 mt-11 "src={img1} alt="img1"/></div>
        </div>
        <div  className='grid grid-cols-1 sm:grid-cols-2  mt-11'>
        <div><img className="h-60 w-84  mt-11 ml-11 pl-11 "src={img2} alt="img1"/></div>

        <div>
        <div className='text-gray-800 font-large text-3xl ml-11 pl-11 mr-5 mb-5 mt-11'>Welcome to iMeet for MERN</div>
       <div className=' text-gray-700 font-medium ml-11'>Collaboration lies at the heart of successful software development, and iMeet for MERN makes it easier than ever. Connect with your team members, effortlessly share code snippets, and collaborate in real-time, all within a unified and intuitive interface. Leverage the collective expertise of your team and accelerate your development process, bringing your MERN projects to life faster than ever before.</div>
        
        </div>
        </div>
        </div>
        <div className='mt-11 pl-11 ml-11 mb-11'><Lists/></div>
        
    </div>
  )
}

export default Home