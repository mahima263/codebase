import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-3 place-items-center bg-blue-950'>
            <div className='grid grid-rows-2'>
                <div className='font-bold text-white ml-11 text-4xl mt-5'>CodeBase</div>
                <div className='ml-7 text-white'>With iMeet's robust collaboration features, 
you can easily connect with fellow developers, 
share code snippets, and brainstorm ideas in real-time.</div>
            </div>
            <div>
                <div className='mt-11 text-white'>Quick Links</div>
                <ul className='text-white mt-11 py-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Terms & Condition</li>
                    <li>Privacy & policy</li>
                    

                </ul>
            </div>
            <div>
            <div className='mt-11 text-white'>Contact</div>
                <ul className='text-white mt-11 py-5 mb-11'>
                    <li>+91 000000000</li>
                    <li>imeet.mathura@gmail.com</li>
                    <li>Mathura, Uttar Pradesh</li>
                   
                    

                </ul>

            </div>
        </div>
        <div className='text-end py-2 mb-3 text-white bg-blue-950 pr-11'>Copyright@imeet 2023</div>
    </div>
  )
}

export default Footer