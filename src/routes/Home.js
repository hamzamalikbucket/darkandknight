import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Content from "../Components/Content";
import CardData from "../Components/CardData";
import Footer from "../Components/Footer";
import Image from "../Components/Image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Content
        heading="About Us"
        text="Dark and Night provides a highly skilled team ready to assist you with your security services needs in every manner possible.We have received various accreditations which we strictly follow to ensure we always provide  honest and competent service.The Community Safety Accreditation Scheme provides training to every member of our team."
        button="Read More"
      />
      <CardData />
      <Content
        heading="Life at Dark & night Services"
        text="Our security officers can work day shifts, night shifts, weekends, and public holidays so to keep them happy.we plan their schedules to give them quality time away from the workplace.This means that when they return, they are fresh and focused."
        button="Read More"
      />
      <Image />
      <Footer />
    </div>
  );
};

export default Home;
