import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'
import Signup from './Components/Signup'
import Login from './Components/Login'


const App = () => {
  return (
    <div>
      <Navbar/>
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
       <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/> 
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App