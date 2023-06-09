import { useState } from "react";
import Result1 from "./Result1";
import Result2 from "./Result2";
import Result3 from "./Result3";
import Result4 from "./Result4";
import Result5 from "./Result5";
import { Navigate, useNavigate } from "react-router-dom";


const Test = () => {

    const [choice1, setChoice1] = useState(26)
    const [choice2, setChoice2] = useState(0)
    const [choice3, setChoice3] = useState(0)
    const [choice4, setChoice4] = useState(0)
    const [choice5, setChoice5] = useState(0)
    const [choice6, setChoice6] = useState(0)
    const [choice7, setChoice7] = useState(0)
    const [choice8, setChoice8] = useState(0)
    const [choice9, setChoice9] = useState(0)
    
    const navigate = useNavigate();




    async function submit(e) {
        e.preventDefault()
        let sum = await (parseInt(choice1) + parseInt(choice2) + parseInt(choice3) + parseInt(choice4) + parseInt(choice5) + parseInt(choice6) + parseInt(choice7) + parseInt(choice8) + parseInt(choice9))
        console.log('score: ', sum)
        Result(sum)
    }
    function Result(sum) {
        if (sum >= 0 && sum <= 4) {
            navigate('/Result1')
        }else if(sum >= 5 && sum <= 9){
            navigate('/Result2')
        }else if(sum >= 10 && sum <= 14){
            navigate('/Result3')
        }else if(sum >= 15 && sum <= 19){
            navigate('/Result4')
        }else if(sum >= 20 && sum <= 27){
            navigate('/Result5')
        }
    }


    return (
        <div className='bg-gradient-to-br from-[#fae377] from-5% via-[#B0DAFF] via-30% to-[#e26d8a] to-99% h-full text-[#2A2F4F] pt-[50px]'>
            <div className='flex justify-center items-center font-semibold text-[35px]'>
                <h1>ในช่วง 2 สัปดาห์ที่ผ่านมา คุณมีอาการต่อไปนี้บ่อยแค่ไหน?</h1>
            </div>
            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>เบื่อ ทำอะไรๆก็ไม่เพลิดเพลิน</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice1" value={0} onChange={(e) => setChoice1(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice1" value={1} onChange={(e) => setChoice1(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice1" value={2} onChange={(e) => setChoice1(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice1" value={3} onChange={(e) => setChoice1(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>ไม่สบายใจ ซึมเศร้า หรือท้อแท้</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice2" value={0} onChange={(e) => setChoice2(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice2" value={1} onChange={(e) => setChoice2(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice2" value={2} onChange={(e) => setChoice2(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice2" value={3} onChange={(e) => setChoice2(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>หลับยาก หลับๆตื่นๆ หรือหลับมากเกินไป</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice3" value={0} onChange={(e) => setChoice3(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice3" value={1} onChange={(e) => setChoice3(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice3" value={2} onChange={(e) => setChoice3(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice3" value={3} onChange={(e) => setChoice3(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>เหนื่อยง่าย หรือไม่ค่อยมีแรง</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice4" value={0} onChange={(e) => setChoice4(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice4" value={1} onChange={(e) => setChoice4(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice4" value={2} onChange={(e) => setChoice4(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice4" value={3} onChange={(e) => setChoice4(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>เบื่ออาหาร หรือกินมากเกินไป</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice5" value={0} onChange={(e) => setChoice5(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice5" value={1} onChange={(e) => setChoice5(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice5" value={2} onChange={(e) => setChoice5(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice5" value={3} onChange={(e) => setChoice5(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือเป็นคนทำให้ตัวเองหรือครอบครัวผิดหวัง</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice6" value={0} onChange={(e) => setChoice6(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice6" value={1} onChange={(e) => setChoice6(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice6" value={2} onChange={(e) => setChoice6(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice6" value={3} onChange={(e) => setChoice6(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใข้คามตั้งใจ</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice7" value={0} onChange={(e) => setChoice7(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice7" value={1} onChange={(e) => setChoice7(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice7" value={2} onChange={(e) => setChoice7(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice7" value={3} onChange={(e) => setChoice7(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>พูดหรือทำอะไรช้าลงจนคนอื่นสังเกต หรือกระสับกระส่ายมากกว่าปกติ</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice8" value={0} onChange={(e) => setChoice8(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice8" value={1} onChange={(e) => setChoice8(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice8" value={2} onChange={(e) => setChoice8(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice8" value={3} onChange={(e) => setChoice8(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>

            <div className='flex justify-center items-center font-semibold text-[30px] pt-[30px]'>
                <h1>คิดทำร้ายตัวเอง หรือคิดว่าถ้าตายไปจะดีกว่า</h1>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <div className='flex flex-row items-center text-[20px] gap-5 '>
                    <label>
                        <input type='radio' name="choice9" value={0} onChange={(e) => setChoice9(e.target.value)} />
                        ไม่เคย
                    </label>
                    <label>
                        <input type='radio' name="choice9" value={1} onChange={(e) => setChoice9(e.target.value)} />
                        มีบางวัน
                    </label>
                    <label>
                        <input type='radio' name="choice9" value={2} onChange={(e) => setChoice9(e.target.value)} />
                        มีบ่อย
                    </label>
                    <label>
                        <input type='radio' name="choice9" value={3} onChange={(e) => setChoice9(e.target.value)} />
                        มีเกือบทุกวัน
                    </label>
                </div>
            </div>
            <div className='flex justify-center pt-[30px]'>
                <button onClick={submit} className='bg-[#e26d8a] border-[10px] border-[#e26d8a] text-[25px] text-white rounded-full mt-5 hover:bg-[#F1D00A] hover:border-[#F1D00A]'>
                    <a >ส่งคำตอบ</a>
                </button>
            
            </div>
        </div>
    );
};

export default Test;