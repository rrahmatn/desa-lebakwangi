import React from "react";
import Logo from "./../../harta/img/logo.png";
import Imgfooter from "./../../harta/img/footer.png";
import { AiOutlineInstagram , AiOutlineYoutube} from "react-icons/ai";
import { Link } from "react-router-dom";
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {RxTwitterLogo} from 'react-icons/rx';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#00A18E] h-fit flex flex-col text-white py-5 px-4 ">
        <div className="flex flex-row w-full h-fit justify-between border-b-2 border-white pb-3">
          <div className="flex flex-col w-1/4 pl-6">
            <img src={Logo} alt="Logo Lobakwangi" className="w-1/3 h-fit" />
            <div className="flex text-justify indent-lg text-white text-[12px] mt-4">
              Desa Lebakwangi termasuk wilayah Kecamatan Arjasari Kabupaten
              Bandung dengan luas wilayah 316.717 Ha.,yang berjarak tempuh 6 km
              dari ibukota Kecamatan Arjasari, 11 km dari Ibukota Kabupaten
              Bandung, dan 19 km dari Ibukota Provinsi Jawa Barat. Dataran
              dengan ketinggian rata-rata 600 m di atas permukaan laut.
            </div>
          </div>
          <div className="flex flex-col w-1/6 h-fit ml-20">
            {" "}
            <img src={Imgfooter} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center w-1/6 text-white gap-2 mt-20 ml-20">
            <div className="flex pl-5">Sosial Media</div>
            <div className="flex flex-row w-full justify-evenly">
              <a href="instagram.com" className="text-[24px]">
                <AiOutlineInstagram />
              </a>
              <a href="instagram.com" className="text-[28px]">
                <TiSocialFacebookCircular />
              </a>
              <a href="instagram.com" className="text-[24px]">
                <RxTwitterLogo />
              </a>
              <a href="instagram.com" className="text-[24px]">
                <AiOutlineYoutube />
              </a>
            </div>
            <div className="flex text-[12px] pl-5">
              lebakwangi@desamandiri.com
            </div>
          </div>
          <div className="flex flex-col w-1/4 text-white gap-2 pl-32 mt-8">
            <p className="font-bold">Sitemap</p>
            <Link to="/" className="text-[12px]">
              Home
            </Link>
            <Link to="/" className="text-[12px]">
              Profile
            </Link>
            <Link to="/" className="text-[12px]">
              Program Unggulan
            </Link>
            <Link to="/" className="text-[12px]">
              Berita
            </Link>
            <Link to="/" className="text-[12px]">
              Web Desa
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-white text-[12px] mt-3">
          Copyright © 2023 Pemerintah Desa Lebakwangi - KKN SISDAMAS UIN SGD
          Bandung 2023. All Right Reserved
        </div>
      </div>
    </>
  );
};
export default Footer;
