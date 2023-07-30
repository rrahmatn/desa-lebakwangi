import React from "react";

const Content3 = () => {
  const sample = "sample.jpg";
  return (
    <>
      <div
        className="bg-[#003D38] flex mx-4 items-center justify-center rounded-xl"
        style={{ width: "700px", height: "310px" }}
      >
        <img className="h-full w-auto" src={`content3/${sample}`} alt="gambar produk" />
      </div>
    </>
  );
};
export default Content3;
