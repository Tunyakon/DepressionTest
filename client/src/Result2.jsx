import React from 'react'
import { MdSentimentSatisfied } from "react-icons/md";


const Result2 = () => {
    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99%  text-[#2A2F4F] pt-[50px] h-full'>
            <div className='font-semibold flex justify-center text-[45px]'>
                <h1>ผลการทดสอบ</h1>
            </div>
            <div className='flex justify-center text-[150px] text-[#44DF21] pt-5'>
                <MdSentimentSatisfied />
            </div>
            <div className='flex justify-center text-[35px] pt-3 '>
                <h1>ท่านมีอาการซึมเศร้าระดับเล็กน้อย</h1>
            </div>
            <div className='font-semibold flex justify-center text-[40px] pt-10'>
                <h1>ข้อแนะนำในการดูแล</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-5'>
                <h1>ควรพักผ่อนให้เพียงพอ นอนหลับให้ได้ 6-8 ชั่วโมง </h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>ออกกำลังกายสม่ำเสมอ ทำกิจกรรมที่ทำให้ผ่อนหลาย พบปะเพื่อนฝูง</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>ควรทำแบบประเมินอีกครั้งใน 1 สัปดาห์</h1>
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

export default Result2