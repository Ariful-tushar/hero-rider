import React from "react";
import Footer from "../Shared/Footer/Footer";
import Headers from "../Shared/Navbar/Headers";
import { useHistory } from "react-router-dom";

const LearningPackage = () => {
  const history = useHistory();
  const handlePurchaseButton = () => {
    history.push("/purchase");
  };

  return (
    <div>
      <Headers></Headers>
      <h2 className="my-5 text-5xl font-bold">Learning Package</h2>
      <div className="w-2/6 mx-auto">
        <div className="border-4 rounded-lg p-2 text-left lg:w-3/4 mx-auto my-5 text-start">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2014_12/271761/140321-caraoke-mms-1844.jpg"
            alt=""
          />
          <h2>
            <span className="font-bold">Package Name:</span> Car Driving
          </h2>
          <h4>
            <span className="font-bold">Duration: </span>1 Month
          </h4>

          <h4>
            <span className="font-bold">Price: </span>
            $200
          </h4>
          <button
            onClick={handlePurchaseButton}
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Purchase
          </button>
        </div>
        <div className="border-4 rounded-lg p-2 text-left lg:w-3/4 mx-auto my-5 text-start">
          <img
            src="https://www.wikihow.com/images/thumb/4/4d/Ride-a-Motorcycle-%28Beginners%29-Step-4-Version-2.jpg/aid1566422-v4-728px-Ride-a-Motorcycle-%28Beginners%29-Step-4-Version-2.jpg.webp"
            alt=""
          />
          <h2>
            <span className="font-bold">Package Name:</span> Bike Riding
          </h2>
          <h4>
            <span className="font-bold">Duration: </span>1 Month
          </h4>

          <h4>
            <span className="font-bold">Price: </span>
            $100
          </h4>
          <button
            onClick={handlePurchaseButton}
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Purchase
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LearningPackage;
