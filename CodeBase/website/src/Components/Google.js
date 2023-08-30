import React from 'react'
import img4 from '../assets/img41.png'
import {useState} from 'react'
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import app from './firebase'

const Login = () => {
  const auth = getAuth(app);
const signin =()=>{
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
  console.log(credential);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      alert(user)
    }).catch((error) => {
      // Handle Errors here.
      alert(error);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
}
  const[data,setData]=useState(
    {
      
      email:'',
      password:'',
    
      

    }
  )
  const {email,password}=data;
 
 const changeHandler = e=>{
  setData({ ...data,[e.target.name]:e.target.value})
 }

const submitme = e=>{
  e.preventDefault();
  
}
 

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className=' hidden sm:grid'><img className='scale-75' alt="h" src={img4}/></div>
        <div  className=''>
          <div className='grid grid-cols-1 bg-white  mt-11 '>
         

 

  
    <div>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-xl  pl-10 sm:pl-1  border-3 border-gray-800 ml-11 sm:ml-0 mt-11 ">
    <div class="">
      <center>
      <h1 className='text-[#1a1c31c6] font-bold  mt-6 text-center text-3xl'>Welcome Back!</h1> 
        <h1 className='text-[#2533fb] font-bold text-2xl mt-6 mb-7'>Login</h1> 
        <form onSubmit={submitme} autoComplete='off'>

         <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Email</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2' type="text" name='email' placeholder='    Enter Email' value={email} onChange={changeHandler}  required /><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Password</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="password" name='password'placeholder='    Enter password'value={password} onChange={changeHandler}  required /><br></br>
        <br></br>
        <button onClick={signin} className='border-2 border-text-[#2533fb] font-extrabold text-white bg-[#2533fb] px-4 py-2 rounded-lg mb-2' >Login</button>
        <h1 className='text-sm mr-5 font-bold text-gray-700 text-right mb-7'>Home Page <a  className='text-blue-700 text-xs font-bold' href='/'>CLICK HERE!</a></h1>
        <br></br>
        </form>
      </center>
      </div>
      </div>
    </div>
  



</div>
        </div>
      </div>
    </div>
  )
}

export default Login