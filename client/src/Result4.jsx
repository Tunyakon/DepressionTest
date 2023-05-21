import React from 'react'
import { MdSentimentVeryDissatisfied } from "react-icons/md";


const Result4 = () => {
    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-full text-[#2A2F4F] pt-[50px]'>
            <div className='font-semibold flex justify-center text-[45px]'>
                <h1>ผลการทดสอบ</h1>
            </div>
            <div className='flex justify-center text-[150px] text-[#ff7810] pt-5'>
                <MdSentimentVeryDissatisfied />
            </div>
            <div className='flex justify-center text-[35px] pt-3 '>
                <h1>ท่านมีอาการซึมเศร้าระดับรุนแรงค่อนข้างมาก</h1>
            </div>
            <div className='font-semibold flex justify-center text-[40px] pt-10'>
                <h1>ข้อแนะนำในการดูแล</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-5'>
                <h1>ควรพบแพทย์เพื่อประเมินอาการและให้ยารักษา</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>ระหว่างนี้ควรพักผ่อนให้เพียงพอ นอนหลับให้ได้ 6-8 ชั่วโมง </h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>ออกกำลังกายเบาๆ ทำกิจกรรมที่ทำให้ผ่อนคลาย ไม่เก็บตัว</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>และควรขอคำปรึกษาช่วยเหลือจากผู้ใกล้ชิด</h1>
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

export default Result4