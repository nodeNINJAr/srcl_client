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
import AllProjects from "../pages/publicPages/AllProjects";
import OnGoing from "../pages/publicPages/OnGoing";



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
             <Route path="projects" element={<OurProjects/>}>
                <Route path="On-going" element={<OnGoing/>}/>
                <Route path="all" element={<AllProjects/>}/>
             </Route>
             <Route path="news-events-notices" element={<Nen />}/>
             <Route path="career" element={<Career/>}/>
             <Route path="g-card" element={<Gcard />}/>
             <Route path="conatct" element={<Gcard />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    );
  };
  
  export default Router;