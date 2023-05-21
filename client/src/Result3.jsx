import React from 'react'
import { MdSentimentDissatisfied } from "react-icons/md";


const Result3 = () => {
    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99%  text-[#2A2F4F] pt-[50px] h-full'>
            <div className='font-semibold flex justify-center text-[45px]'>
                <h1>ผลการทดสอบ</h1>
            </div>
            <div className='flex justify-center text-[150px] text-[#f7ff0a] pt-5'>
                <MdSentimentDissatisfied />
            </div>
            <div className='flex justify-center text-[35px] pt-3 '>
                <h1>ท่านมีอาการซึมเศร้าระดับปานกลาง</h1>
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
                <h1>ควรขอคำปรึกษาช่วยเหลือจากผู้ที่ไว้วางใจ ไม่จมอยู่กับปัญหา มองหาหนทางคลี่คลาย </h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>หากอาการที่ท่านเป็นมีผลกระทบต่อการทำงานหรือการเข้าสังคม</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>(อาการซึมเศร้าทำให้ท่านมีปัญหาในการทำงาน การดูแลสิ่งต่างๆในบ้าน หรือการเข้ากับผู้คนในระดับมากถึงมากที่สุด)</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>หรือ หากท่านมีอาการระดับนี้มานาน 1-2 สัปดาห์แล้วยังไม่ดีขึ้น</h1>
            </div>
            <div className='flex justify-center text-[27px] pt-3'>
                <h1>ควรพบแพทย์เพื่อเข้ารับการรักษา</h1>
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

export default Result3