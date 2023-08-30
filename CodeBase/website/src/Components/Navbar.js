import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-white '>
            <div>
                <ul className='md:mt-5 mt-2 ml-3 font-bold text-lg '>
                    <li className=' text-sm sm:text-xl text-purple-700 absolute cursor-cell mb-11 '>CodeBase</li>
                    
                </ul>
            </div>
            <div className='opacity-80   md:flex'>
                <ul className='flex flex-row p-3 text-purple-700  '>
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-in-out hover:text-purple-700 hover:scale-110 mt-3'><a href ='/'>HOME </a></li> 
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-purple-700 hover:scale-110 mt-3'><a href ='/About'>ABOUT</a> </li> 

                
                <li className='md:mr-5 mr-2  font-bold md:text-lg text-xs transition-all ease-out hover:text-purple-700 hover:scale-110 mt-3'><a href ='/Contact'>CONTACT</a> </li> 
                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-white hover:scale-110 text-white bg-purple-700 px-6 py-2 rounded-xl'><a href ='/Login'>LOG IN </a></li>     

                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs transition-all ease-out hover:text-purple hover:scale-110  text-purple bg-white px-6 py-2 rounded-xl  border border-purple-700'><a href ='/Signup'>SIGN UP</a> </li> 
             </ul>
            </div> 


        </div>
        <hr className=''></hr>
    </div>
  )
}

export default Navbar