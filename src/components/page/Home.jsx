import React from "react";
import Hero from "../HeroPage";
import OurService from "../OurService";
import ClinicWith from "../ClinicWith";
import BestSpecialist from "../BestSpecialist";
import CustomerReview from "../CustomerReview";
import Newslatter from "../Newslatter";

function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-5">
        <OurService />
      </div>
      <div className="mt-5 pt-5">
        <ClinicWith />
      </div>
      <div className="mt-5 pt-5">
        <BestSpecialist />
      </div>
      <div className="mt-5 pt-5">
        <CustomerReview />
      </div>
      <div className="mt-3">
        <Newslatter />
      </div>
     
    </div>
  );
}

export default Home;
