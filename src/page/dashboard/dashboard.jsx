import React from "react";
import Navbar from "../../components/navbar/navbar";
import logo from "./../../harta/img/logo.png";
import Content1 from "../../components/content1/content1";
import Content3 from "../../components/content3/content3";
import ProfileCard from "../../components/profilecard/profilecard";
import ProductCard from "../../components/produkcard/produkCard";
import Footer from "../../components/footer/footer";
import imgDashboard from "../../harta/img/dashboard.png";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <div className="flex flex-col w-full h-96 overflow-x-hidden items-center content-center bg-black">
          <img src={imgDashboard} alt="content1" className=" h-full w-fit"   />  
        </div>

        <div className="flex flex-row w-full justify-between absolute pt-9 px-14">
          <img className="h-16" src={logo} alt="logo" />
          <div>
            <Navbar />
          </div>
        </div>
        <div className="static " style={{ marginTop: "-90px" }}>
          <Content1 />
        </div>
        <div className="flex" style={{ marginTop: "30px" }}>
          <ProfileCard />
        </div>
        <div className="static my-5 flex flex-row overflow-hidden">
          <Content3 />
        </div>
        <div className="static my-5 mx-5">
          <ProductCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
