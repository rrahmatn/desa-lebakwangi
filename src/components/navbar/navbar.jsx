import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () =>{

    const active = "text-green-500"
    return(
        <>
        <div className=" h-11 w-fit px-4 flex flex-row rounded-2xl bg-[#003D38] justify-around">
            <Link className={`my-2 mx-3 text-white text-sm hover:text-green-500 ${active}`} to="/">Home</Link>
            <Link className={`my-2 mx-3 text-white text-sm hover:text-green-500`} to="/">Profile</Link>
            <Link className={`my-2 mx-3 text-white text-sm hover:text-green-500`} to="/">Produk Unggulan</Link>
            <Link className={`my-2 mx-3 text-white text-sm hover:text-green-500`} to="/">Berita</Link>
            <Link className={`my-2 mx-3 text-white text-sm hover:text-green-500`} to="/">Web Desa</Link>
        </div>
        
        </>
    )
}

export default Navbar;