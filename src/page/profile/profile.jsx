import React from "react";
import Navbar from "../../components/navbar/navbar";
import imgDashboard from "../../harta/img/dashboard.png";
import logo from "./../../harta/img/logo.png";
import JudulContent from "../../components/judulcontent/judulcontent";
import map from "../../harta/img/map.png";

const Profile = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <div className="flex flex-col w-full h-96 overflow-x-hidden items-center content-center bg-black">
          <img src={imgDashboard} alt="content1" className=" h-full w-fit" />
        </div>

        <div className="flex flex-row w-full justify-between absolute pt-9 px-14">
          <img className="h-16" src={logo} alt="logo" />
          <div>
            <Navbar />
          </div>
        </div>
        <div
          className="absolute flex flex-col text-white"
          style={{ marginTop: "250px" }}
        >
          <div className="flex text-[32px] font-bold drop-shadow-xl">
            <p>PROFIL DESA LEBAKWANGI</p>
          </div>
          <div className="flex text-[14px] mb-5 drop-shadow-xl">
            <p>
              Informasi Mengenai Profil Pemerintahan Desa Lebakwangi Kecamatan
              Arjasari Kabupaten Bandung{" "}
            </p>
          </div>
          <JudulContent />
        </div>
        <div
          className="h-fit overflow-hidden flex mt-16 items-center"
          style={{ width: "1000px" }}
        >
          <img src={map} alt="map arjasari" className="w-full h-fit" />
        </div>
      </div>
    </>
  );
};

export default Profile;
