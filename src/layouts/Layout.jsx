import React from "react";
import { Outlet } from "react-router";
import TopNavbar from "../components/shared/navbar/TopNavbar";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";





// ** layout for public pages
const Layout = () => {
  return (
    <div className="container mx-auto bg-[#F8F9FA] text-[#333333]">
      {/* top navbar */}
        <TopNavbar/>
      {/* navbar */}
       <header className="sticky top-0 z-50"><Navbar/></header>
      {/*  */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* footer */}
       <Footer/>
    </div>
  );
};

export default Layout;
