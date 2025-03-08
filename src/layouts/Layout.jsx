import React from "react";
import { Outlet } from "react-router";
import TopNavbar from "../components/shared/navbar/TopNavbar";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";
import MegaMenu from "../components/shared/navbar/MegaMenu";
import AppHeader from "../components/shared/navbar/AppHeader";


// ** layout for public pages
const Layout = () => {
  return (
    <div className="container mx-auto bg-[#dde4eccc] text-[#333333]">
      {/* top navbar */}
         <AppHeader/>
      {/* navbar */}
      <header className="sticky top-0 z-50"><MegaMenu/></header>
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
