import React from 'react'
import qrcode2 from './assets/qrcode2.png'
import call2 from './assets/call2.png'
import chatbot3 from './assets/chatbot3.png'


const Help = () => {
    return (
        <div className="bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-screen text-[#2A2F4F] pt-[50px]">
            <div className='flex justify-between px-[95px] pt-[0px]'>
                <div>
                    <div className='font-semibold flex justify-center text-[#2A2F4F] text-[40px] pt-5 '>
                        <h1>สายด่วนสุขภาพจิต</h1>
                    </div>
                    <div className='font-semibold flex justify-center text-[#2A2F4F] text-[40px] pt-5 '>
                        <h1>โทร 1323</h1>
                    </div>
                    <div className='flex justify-center'>
                        <img src={call2} alt="" width="250px" />
                    </div>
                    <div className='flex justify-center text-[#2A2F4F] text-[22px] pt-5 '>
                        <h1>สำหรับพูดคุยปรึกษากับนักจิตวิทยา นักสังคมสงเคราะห์ หรือพยาบาลวิชาชีพ</h1>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <div className='font-semibold flex justify-center text-[#2A2F4F] text-[40px] pt-5 '>
                            <h1>Chatbot 1323</h1>
                        </div>
                        <div className='flex justify-center pt-[20px]'>
                            <img src={chatbot3} alt="" width="250px" />
                            <img src={qrcode2} alt="" width="250px" />
                        </div>
                        <div className=' flex justify-center text-[#2A2F4F] text-[20px] pt-10'>
                            <h1>สำหรับพูดคุยปรึกษากับแชทบอท</h1>
                        </div>
                        <div className=' flex justify-center text-[#2A2F4F] text-[20px] pt-5 '>
                            <h1>เพื่อประเมินความเครียดและให้คำแนะนำการจัดการความเครียดเบื้องต้น</h1>
                        </div>
                        <div className=' flex justify-center text-[#2A2F4F] text-[20px] pt-5 '>
                            <h1>และให้ข้อมูลเพื่อส่งต่อสถานพยาบาลด้านสุขภาพจิตที่เกี่ยวข้อง</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help

