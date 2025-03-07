import { Route, Routes } from "react-router";
import Home from "../pages/publicPages/Home";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import ServiceDetails from "../pages/publicPages/serviceDetails";
import Services from "../pages/publicPages/Services";
import OurProjects from "../pages/publicPages/OurProjects";
import Training from "../pages/publicPages/Training";
import Resources from "../pages/publicPages/Resources";
import AboutUs from "../pages/publicPages/AboutUs";
import Nen from "../pages/publicPages/Nen";
import Career from "../pages/publicPages/Career";
import Gcard from "../pages/publicPages/Gcard";
import OurDepartments from "../pages/publicPages/OurDepartments";
import AllProjects from "../pages/publicPages/allprojects/AllProjects";
import OnGoing from "../pages/publicPages/allprojects/OnGoing";
import ContactUs from "../pages/publicPages/ContactUs";
import CarbonCalculation from "../pages/publicPages/CarbonCalculation";
import ProjectsDetails from "../pages/publicPages/ProjectDetails";
import Completed from "../pages/publicPages/allprojects/Completed";
import YearWise from "../pages/publicPages/allprojects/YearWise";




// ** routing 
const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>
             <Route index element={<Home />}/>
             <Route path="departments" element={<OurDepartments />}/>
             <Route path="services" element={<Services />}/>
             <Route path="services/:id" element={<ServiceDetails />}/>
             <Route path="about-us" element={<AboutUs/>} />
             <Route path="resources" element={<Resources/>} />
             <Route path="training" element={<Training/>} />
             {/* projects route */}
             <Route path="projects" element={<OurProjects/>}>
                {/* clild ongoing  */}
                <Route path="on-going" element={<OnGoing/>}/>
                {/* child all projects */}
                <Route path="all-projects" element={<AllProjects/>}>
                     <Route path="ongoing" element={<OnGoing/>}/>
                     <Route path="completed" element={<Completed/>}/>
                     <Route path="year-wise" element={<YearWise/>}/>
                </Route>
             </Route>
             {/* project details */}
             <Route path="projects/:id" element={<ProjectsDetails/>}/>
             <Route path="news-events-notices" element={<Nen />}/>
             <Route path="career" element={<Career/>}/>
             <Route path="carbon-calculation" element={<CarbonCalculation />}/>
             <Route path="g-card" element={<Gcard />}/>
             <Route path="contact" element={<ContactUs />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    );
  };
  
  export default Router;