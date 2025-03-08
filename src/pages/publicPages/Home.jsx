import React from "react";
import WhoWeAreSection from "../../components/home/WhoWeAreSection";
import OurServices from "../../components/home/OurServices";
import OurLandmarkProjects from "../../components/home/OurLandmarkProjects";
import OurPartnerShip from "../../components/home/OurPartnerShip";
import Banner from "../../components/home/Banner";
import StatsSection from "../../components/home/StatsSection";
import OurOnGoingProjects from "../../components/home/OurOnGoingProjects";
import ContactUs from "../../components/home/ContactUs";
import OurSisterConcern from "../../components/home/OurSisterConcern";
import VideoShowCasing from "../../components/home/VideoShowCasing";



// ** home page
const Home = () => {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      {/*  */}
      <section className="mx-auto font-Roboto">
         <WhoWeAreSection/>
      </section>
       {/* stats */}
       <section>
         <StatsSection/>
      </section>
      {/* services */}
      <section className="w-11/12 mx-auto pt-6">
         <OurServices/>
      </section>
       {/* landmark projects */}
       <section className="w-11/12 mx-auto pt-8">
         <OurOnGoingProjects/>
      </section>
       {/* landmark projects */}
       <section className="w-11/12 mx-auto py-16">
         <OurLandmarkProjects/>
      </section>
      {/* sister concern */}
      <section className="pb-16 w-11/12 mx-auto">
         <OurSisterConcern/>
      </section>
      {/*  */}
      <section className="pb-16 w-11/12 mx-auto">
         <OurPartnerShip/>
      </section>
      {/* video showcasing */}
      <section>
          <VideoShowCasing/>
      </section>
      {/* contact-us section */}
      <section className="contact_bg mx-auto">
         <ContactUs/>
      </section>
    </div>
  );
};

export default Home;
