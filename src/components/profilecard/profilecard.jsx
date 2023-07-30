import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProfileCard = () => {
  const nametag = "Ridwan Kamil Sp.d";
  const isiContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate explicabo mollitia quod beatae ut repudiandae libero id voluptas illo harum, quasi ex! Aspernatur esse velit recusandae nihil! Voluptas, consequuntur!";
  const jabatan = "Tukang Las";
  const judulKartu = "Desa Lebakwangi";
  return (
    <>
      <div
        className="bg-[#003D38] display flex flex-row my-2 mx-auto py-1 rounded-2xl"
        style={{ width: "760px", height: "340px" }}
      >
        <div
          className="w-1/4 relative my-auto "
          style={{ marginLeft: "-40px" }}
        >
          <img
            src="profile/ridwan-kamil.png"
            alt="foto pak kades"
            className="rounded-xl"
            style={{ width: "200px", height: "240px" }}
          />
          <div
            className="relative bg-white rounded-sm text-center py-2 flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]"
            style={{
              width: "250px",
              height: "60px",
              marginLeft: "-30px",
              marginTop: "-60px",
            }}
          >
            <div className="font-semibold">{nametag}</div>
            <div className="font-[9px]">{jabatan}</div>
          </div>
        </div>
        <div className="w-3/4 h-full pt-7 px-4 pl-8 text-white flex flex-col justify-between">
          <div className="h-3/4">
            <h1 className="pb-3 text-2xl font-bold ">{judulKartu}</h1>
            <p className="indent-6 text-justify text-[12px] font-thin">{isiContent}</p>
          </div>

          <div className="h-1/4 w-full flex flex-col items-end">
            <Link
              to="/"
              className="static w-fit h-fit py-1 px-16 border-white border-solid border-2 rounded-sm hover:bg-[#003D31] "
            >
              Selengkapnya ...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
