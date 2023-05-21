import React from 'react'
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";


const Result5 = () => {
    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-screen text-[#2A2F4F] pt-[50px]'>
            <div className='font-semibold flex justify-center text-[45px]'>
                <h1>ผลการทดสอบ</h1>
            </div>
            <div className='flex justify-center text-[150px] text-[#de2222] pt-5'>
                <MdOutlineSentimentVeryDissatisfied />
            </div>
            <div className='flex justify-center text-[35px] pt-3 '>
                <h1>ท่านมีอาการซึมเศร้าระดับรุนแรงมาก</h1>
            </div>
            <div className='font-semibold flex justify-center text-[40px] pt-10'>
                <h1>ข้อแนะนำในการดูแล</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-5'>
                <h1>ต้องพบแพทย์เพื่อประเมินอาการ</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>และให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้</h1>
            </div>
            <div className='flex justify-center text-[20px] text-[#F72F07] pt-20'>
                <h1>หมายเหตุ : แบบทดสอบนี้เป็นเพียงการทดสอบอาการเบื้องต้น</h1>
            </div>
            <div className='flex justify-center text-[20px] text-[#F72F07] pt-2'>
                <h1>โดยดัดแปลงมาจากแบบสอบถามสุขภาพผู้ป่วย (Patient health Questionnaire : PHQ-9)</h1>
            </div>
        </div>
    )
}

export default Result5