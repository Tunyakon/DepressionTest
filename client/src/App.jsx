import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './home'
import Test from './test'
import Help from './help'
import Contact from './contact'
import Result1 from './Result1'
import Result2 from './Result2'
import Result3 from './Result3'
import Result4 from './Result4'
import Result5 from './Result5'


import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/contact' element={<Contact/>}/>/
      <Route path='/Result1' element={<Result1/>}/>/
      <Route path='/Result2' element={<Result2/>}/>/
      <Route path='/Result3' element={<Result3/>}/>/
      <Route path='/Result4' element={<Result4/>}/>/
      <Route path='/Result5' element={<Result5/>}/>/

      

    </Routes>

    </>
  )
}

export default App