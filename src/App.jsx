import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/page/Navbar"
import Footer from "./components/page/Footer";

function App() {

  return (
    <>
      <div className="container">
      <Navbar />
      <Outlet />
    </div>
      <div className="mt-5 pt-5">
        <Footer />
      </div>
    </>
  );
}

export default App;
