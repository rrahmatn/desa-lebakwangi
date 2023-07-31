import React from "react";

const JudulContent = () =>{

    const judul = "Map Lebakwangi - Arjasari"
    return(
        <>
        <div className="h-20 mx-20 flex flex-row rounded-lg  items-center bg-[#003D38] shadow-lg " style={{width:'1000px'}}>
            <div className="h-full w-full items-center flex justify-center items-center text-center text-[36px] text-white">{judul}</div>
        </div>
        </>
    )
}

export default JudulContent;