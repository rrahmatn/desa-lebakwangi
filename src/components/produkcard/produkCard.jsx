import React from "react";
import { Link } from "react-router-dom";
import { PiKeyReturnBold } from "react-icons/pi";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const ProductCard = () => {
  const namaProduk = "Kue Lilin Kang Zyisaf";
  const lokasiProduk = "Rt 069 / rw 069";
  return (
    <>
      <div
        className="bg-[#003D38] my-4 py-1 pl-4 pb-4 rounded-2xl text-white"
        style={{ width: "960px", height: "480px" }}
      >
        <div className="w-full h-1/4 flex flex-row px-6 justify-between items-center">
          <h1 className="font-bold text-[28px]">Produk Unggulan</h1>
          <Link
            to="/"
            className="w-fit h-fit py-1 px-14 border-white flex flex-row items-center gap-4 justify-around border-solid border-2 rounded-sm hover:bg-[#003D31]"
          >
            <p>Lihat Semua Produk</p>
            <PiKeyReturnBold />
          </Link>
        </div>
        <div
          className="w-full h-3/4 flex flex-row justify-between "
          style={{ textShadow: "4px 4px 8px rgba(0,255,213,0.8);" }}
        >
          <img
            className="w-1/2 h-full rounded-sm"
            src="produk/contohproduk.jpg"
            alt="gambar produk"
          />
          <div
            className="absolute text-white flex flex-col items-center mx-5 justify-end mt-32 gap-2"
            style={{
              width: "420px",
              height: "200px",
              backgroundColor: "rgba(153, 255, 255 , 0.05)",
            }}
          >
            <p className="font-bold text-[24px]">{namaProduk}</p>
            <p>{lokasiProduk}</p>
            <div className="w-full flex px-5 items-center flex-row justify-between">
              <BsFillArrowLeftCircleFill className="text-[28px] cursor-pointer" />
              <Link
                to="/"
                className="static w-fit h-fit py-1 px-11 border-white border-solid border-2 rounded-sm hover:bg-[#003D31] "
              >
                Selengkapnya ...
              </Link>
              <BsFillArrowRightCircleFill className="text-[28px] cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col w-1/2 pl-3 ">
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-fit h-fit items-center justify-center mx-auto px-5 py-1 border-b-2 border-white cursor-pointer hover:text-green-500 hover:border-green-500">
                Dusun 1
              </div>
              <div className="flex flex-row w-fit h-fit items-center justify-center mx-auto px-5 py-1 border-b-2 border-white cursor-pointer hover:text-green-500 hover:border-green-500">
                Dusun 2
              </div>
              <div className="flex flex-row w-fit h-fit items-center justify-center mx-auto px-5 py-1 border-b-2 border-white cursor-pointer hover:text-green-500 hover:border-green-500">
                Dusun 3
              </div>
              <div className="flex flex-row w-fit h-fit items-center justify-center mx-auto px-5 py-1 border-b-2 border-white cursor-pointer hover:text-green-500 hover:border-green-500">
                Dusun 4
              </div>
            </div>
            <div className="flex flex-col w-full overflow-y-scroll">
              <div className="flex flex-col w-full hover:text-green-500 hover:border-green-500 mt-2">
                <div className="font-bold py-2">
                  <p>Judul Produk</p>
                </div>
                <div className="font-xs text-justify line-clamp-2 cursor-pointer ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio blanditiis quam saepe dicta voluptas totam
                    obcaecati? Recusandae architecto sequi, ullam possimus
                    doloribus quidem tempora nostrum earum laborum explicabo,
                    quas eos?
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full hover:text-green-500 hover:border-green-500 mt-2">
                <div className="font-bold py-2">
                  <p>Judul Produk</p>
                </div>
                <div className="font-xs text-justify line-clamp-2 cursor-pointer ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio blanditiis quam saepe dicta voluptas totam
                    obcaecati? Recusandae architecto sequi, ullam possimus
                    doloribus quidem tempora nostrum earum laborum explicabo,
                    quas eos?
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full hover:text-green-500 hover:border-green-500 mt-2">
                <div className="font-bold py-2">
                  <p>Judul Produk</p>
                </div>
                <div className="font-xs text-justify line-clamp-2 cursor-pointer ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio blanditiis quam saepe dicta voluptas totam
                    obcaecati? Recusandae architecto sequi, ullam possimus
                    doloribus quidem tempora nostrum earum laborum explicabo,
                    quas eos?
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full hover:text-green-500 hover:border-green-500 mt-2">
                <div className="font-bold py-2">
                  <p>Judul Produk</p>
                </div>
                <div className="font-xs text-justify line-clamp-2 cursor-pointer ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio blanditiis quam saepe dicta voluptas totam
                    obcaecati? Recusandae architecto sequi, ullam possimus
                    doloribus quidem tempora nostrum earum laborum explicabo,
                    quas eos?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
