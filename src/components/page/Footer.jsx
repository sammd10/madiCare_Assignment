import React from "react";
import Navbar from "../page/Navbar";

const Footer = () => {

  const icons = [
    {
      icon:'../../../public/images/facebook-app-symbol.png'
    },
    {
      icon:'../../../public/images/google.png'
    },
    {
      icon:'../../../public/images/twitter.png'
    },
  ] 

  return (
    <footer>
     <div className="container">
        <Navbar showForm={false} />
     </div>
      <div className="footer-content py-5">
         <ul className="list-unstyled container d-flex gap-4 align-items-center">
         {
           icons.length > 0 && icons.map((item, index) =>
          <li className="mx-3">
              <img src={item?.icon} alt="" />
          </li>
           )
         }
         </ul>
      </div>
    </footer>
  );
};

export default Footer;
