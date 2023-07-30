import React from "react";
import Navbar from "../../components/navbar/navbar";
import logo from "./../../harta/img/logo.png"
import Content1 from "../../components/content1/content1";
import Content3 from "../../components/content3/content3";
import ProfileCard from "../../components/profilecard/profilecard";

const Dashboard = () => {
    return(
        <>
        <div className="flex flex-row justify-between relative py-7 px-14">
            <img className="h-16"src={logo} alt="logo" />
            <Navbar/>
        </div>
        <div className="static ">
            <Content1 />
            <ProfileCard />
        </div>
        <div className="static my-5 mx-5">
            <Content3/>
        </div>
        </>
    )
}

export default Dashboard;