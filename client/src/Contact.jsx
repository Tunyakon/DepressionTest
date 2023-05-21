import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import contact from './assets/contact.png'

const Contact = () => {
  return (
    <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-screen text-[#2A2F4F] pt-[50px]'>
        <div className='flex justify-between items-center px-[150px] '>
            <div>
              <img src={contact} alt="" width="530px"/>
            </div>
            <div className='h-[350px] w-[650px] pt-1'>
              <div className='flex items-center text-[27px] text-[#2A2F4F] gap-3 '>
                <BsPersonCircle/>
                <h1>น.ส.ธันยากร เจริญพร </h1>
              </div>
              <div className='flex items-center text-[27px] text-[#2A2F4F] pt-3 gap-3'>
                <BsFillPersonVcardFill/>
                <h1>รหัสนักศึกษา 65090500438</h1>
              </div>
              <div className='flex items-center text-[27px] text-[#2A2F4F] pt-3 gap-3'>
                <FaUniversity/>
                <h1>คณะวิทยาศาสตร์ </h1>
              </div>
              <div className='text-[27px] text-[#2A2F4F] pt-3 pl-9'>
                <h1>สาขาวิทยาการคอมพิวเตอร์ประยุกต์</h1>
              </div>
              <div className='text-[27px] text-[#2A2F4F] pt-3 pl-9'>
                <h1>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า ธนบุรี</h1>
              </div>
              <div className='flex items-center text-[27px] text-[#2A2F4F] pt-3 gap-3'>
                <BsFillTelephoneFill/>
                <h1>080-546-9796</h1>
              </div>
              <div className='flex items-center text-[27px] text-[#2A2F4F] pt-3 gap-3'>
                <HiOutlineMail/>
                <h1>Tunyakon.c@gmail.com</h1>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact