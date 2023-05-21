import React from "react";
import star from "../assets/star.png";
import healthcare from "../assets/healthcare.png";

function Navbar(){
    return(
    <>
    <div className="bg-gradient-to-r from-[#fae377] from-0% via-[#B0DAFF] via-60% to-[#bfb9dc] to-50 "> 
        <div className="flex justify-between items-center h-[70px] text-[#2A2F4F] container mx-auto px-[30px] pt-[20px]">
            <div className="flex items-center">
                <img src={healthcare} alt="" width="70px"/>
                <h1 className="text-[40px] font-semibold px-[10px]">
                We'll get through this together
                </h1>
                <img src={star} alt="" width="50px"/>
            </div>
            <ul className="text-[18px] text-white flex gap-10 justify-between ">
                <li className="hover:text-[#FFF56D] border-2 p-2 rounded-full border-[#4763db] bg-[#4763db] hover:bg-[#2746c8] hover:border-[#2746c8]">
                    <a href="/">Home</a>
                </li>
                <li className="hover:text-[#FFF56D] border-2 p-2 rounded-full border-[#4763db] bg-[#4763db] hover:bg-[#2746c8] hover:border-[#2746c8]">
                    <a href="/test">Test</a>
                </li>
                <li className="hover:text-[#FFF56D] border-2 p-2 rounded-full border-[#4763db] bg-[#4763db] hover:bg-[#2746c8] hover:border-[#2746c8]">
                    <a href="/help">Help</a>
                </li>
                <li className="hover:text-[#FFF56D] border-2 p-2 rounded-full border-[#4763db] bg-[#4763db] hover:bg-[#2746c8] hover:border-[#2746c8]">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    </>
    );
}

export default Navbar

