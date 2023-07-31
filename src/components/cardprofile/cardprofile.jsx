import React from "react";

const CardProfile = (props) => {
  const nametag = props.nametag;
  const isiContent = props.isiContent
  const jabatan = props.jabatan;
  const judulKartu = props.judul;
  const gambar = props.gambar;
  return (
    <>
      <div
        className="bg-[#003D38] display flex flex-row my-2 mx-auto py-1 rounded-2xl"
        style={{ width: "860px", height: "400px" }}
      >
        <div
          className="w-1/4 relative my-auto "
          style={{ marginLeft: "-40px" }}
        >
          <img
            src={`profile/${gambar}`}
            alt="foto pak kades"
            className="rounded-xl"
            style={{ width: "300px", height: "280px" }}
          />
          <div
            className="relative bg-white rounded-xl text-center py-2 flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
            style={{
              width: "320px",
              height: "60px",
              marginLeft: "-55px",
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
        </div>
      </div>
    </>
  );
};

export default CardProfile;
