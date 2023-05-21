import React from 'react';

const Test = () => {
    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-screen text-[#2A2F4F] pt-[50px]'>
            <div flex className=''>
                <div className='flex justify-center items-center text-[35px]'>
                    <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา คุณมีอาการต่อไปนี้บ่อยแค่ไหน?</h1>
                </div>
                <div>
                    <div className='flex justify-center items-center text-[30px] pt-[30px]'>
                        <h1>เบื่อ ทำอะไรๆก็ไม่เพลิดเพลิน</h1>
                    </div>
                </div>
                <div className='flex justify-center pt-[30px]'>
                    <div className='flex flex-row items-center text-[20px] gap-5 '>
                        <label>
                            <input type='radio' name='choice' value='ไม่เคย' />
                            ไม่เคย
                        </label>
                        <label>
                            <input type='radio' name='choice' value='มีบางวัน' />
                            มีบางวัน
                        </label>
                        <label>
                            <input type='radio' name='choice' value='มีบ่อย' />
                            มีบ่อย
                        </label>
                        <label>
                            <input type='radio' name='choice' value='มีเกือบทุกวัน' />
                            มีเกือบทุกวัน
                        </label>
                    </div>
                </div>
                <div className='flex justify-center pt-[30px]'>
                    <button className='bg-[#e26d8a] border-[10px] border-[#e26d8a] text-[25px] text-white rounded-full mt-5 hover:bg-[#F1D00A] hover:border-[#F1D00A]'>
                        <a href='/Result1'>ส่งคำตอบ</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Test;
