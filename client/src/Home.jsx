import React from 'react'
import survey from './assets/survey.png'

const Homepage = () => {
  return (
    <>
        <div className="bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-screen">
          <div className='flex justify-between items-center  h-[600px] container mx-auto px-[300px]'>
              <div className=' flex flex-col justify-center text-[#2A2F4F] text-[40px] pt-5 '>
                <h1 className='flex justify-center text-[60px]'>แบบทดสอบ<br></br>ภาวะซึมเศร้า</h1>
                <button className=' bg-[#e26d8a] text-white rounded-full border-[15px] border-[#e26d8a] mt-5 hover:bg-[#F1D00A] hover:border-[#F1D00A] '><a href="/Test">Get started</a></button> 
              </div>
              <img src={survey} alt="" width="550px" className='pl-[150px]'/>
          </div>
        </div>
    </>
  )
}

export default Homepage
