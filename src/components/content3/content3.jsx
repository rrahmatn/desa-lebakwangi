import React from "react";

const Content3 = () => {
  const sample = "sample.jpg";
  return (
    <>
      <div
        className="bg-[#003D38] w-96 h-56 flex flex-row mx-4 items-center justify-center cursor-pointer rounded-xl"
        
      >
        <img className="h-full w-auto overflow-hidden" src={`content3/${sample}`} alt="gambar produk" />
      </div>
    </>
  );
};
export default Content3;
