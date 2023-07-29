import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"


const Content1 = () =>{
    const judul = "Ini Adalah Sebuah Judul"
    return(
        <>
        <div className="h-20 mx-20 flex flex-row rounded-lg bg-[#003D38]" style={{width:'600px'}}>
            <div className="h-full cursor-pointer flex justify-center items-center text-white hover:bg-green-900 rounded-l-lg" style={{width:'10%'}}> <IoIosArrowBack className="text-3xl text-white"/></div>
            <div className="h-full items-center flex justify-center text-center text-white" style={{width:'80%'}}>{judul}</div>
            <div className="h-full cursor-pointer flex justify-center items-center text-white hover:bg-green-900 rounded-r-lg" style={{width:'10%'}}> <IoIosArrowForward className="text-3xl text-white"/></div>
        </div>
        
        </>
    )
}
export default Content1;