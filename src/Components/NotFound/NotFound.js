import React from "react";
import notfound from "../../images/404.png";
import Footer from "../Shared/Footer/Footer";
import Headers from "../Shared/Navbar/Headers";

const NotFound = () => {
  return (
    <div>
      <Headers></Headers>
      <img className="w-2/3 lg:w-1/2 mx-auto" src={notfound} alt="" />
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
