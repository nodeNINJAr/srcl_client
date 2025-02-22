import { Route, Routes } from "react-router";
import Home from "../pages/publicPages/Home";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";



// ** routing 
const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>
             <Route index element={<Home />}/>
             {/* <Route path="departments" element={<OurDepartments />}/>
             <Route path="sectors" element={<Sectors />}/>
             <Route path="services" element={<Services />}/>
             <Route path="about-us" element={<AboutUs/>} />
             <Route path="resources" element={<Resources/>} />
             <Route path="training" element={<Training/>} />
             <Route path="our-projects" element={<OurProjects />}/>
             <Route path="news-events-notices" element={<Nen />}/>
             <Route path="career" element={<Career />}/>
             <Route path="g-card" element={<Gcard />}/> */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    );
  };
  
  export default Router;