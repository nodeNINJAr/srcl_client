import React from "react";
import WhoWeAreSection from "../../components/home/WhoWeAreSection";
import OurServices from "../../components/home/OurServices";
import OurLandmarkProjects from "../../components/home/OurLandmarkProjects";
import OurPartnerShip from "../../components/home/OurPartnerShip";
import Banner from "../../components/home/Banner";
import StatsSection from "../../components/home/StatsSection";




// ** home page
const Home = () => {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      {/*  */}
      <section className=" mx-auto pt-20 font-Roboto bg-gradient-to-r from-[#93ff06] to-[#00869e]">
         <WhoWeAreSection/>
      </section>
       {/* stats */}
       <section>
         <StatsSection/>
      </section>
      {/* services */}
      <section className="pt-20 w-11/12 mx-auto ">
         <OurServices/>
      </section>
       {/* landmark projects */}
       <section className="w-11/12 mx-auto">
         <OurLandmarkProjects/>
      </section>
      {/*  */}
      <section className="py-20 w-11/12 mx-auto">
         <OurPartnerShip/>
      </section>
    </div>
  );
};

export default Home;
