import React from "react";
import { Outlet } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Shared/Footer/Footer";
import { Navbar } from "../components/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <div className="fixed bottom-10 right-10 ">
        <Chat />
      </div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
