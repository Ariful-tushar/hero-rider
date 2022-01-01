import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import useAuth from "../../Hooks/useAuth";
import Headers from "../Shared/Navbar/Headers";

const Profile = () => {
  const [userData, setUserData] = useState({});

  const { user, isRider } = useAuth();

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/users?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.isRider) {
  //           fetch(`http://localhost:5000/riders?email=${user.email}`)
  //             .then((res) => res.json())
  //             .then((data) => {
  //               setUserData(data);
  //             });
  //         } else {
  //           fetch(`http://localhost:5000/learners?email=${user.email}`)
  //             .then((res) => res.json())
  //             .then((data) => {
  //               setUserData(data[0]);
  //               console.log(data[0].name);
  //             });
  //         }
  //       });
  //   }, []);

  useEffect(() => {
    if (isRider) {
      fetch(`http://localhost:5000/riders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    } else {
      fetch(`http://localhost:5000/learners?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data[0]);
          console.log(data[0].name);
        });
    }
  }, []);

  return (
    <div>
      <div className="">
        <Headers></Headers>

        <h2 className="my-5 text-5xl font-bold">Profile Information</h2>
        <div className="border-4 rounded-lg p-2 text-center lg:w-3/6 mx-auto my-5 text-start">
          <h2>
            <span className="font-bold">User Full Name:</span> {userData.name}
          </h2>
          <h4>
            <span className="font-bold">Email: </span>
            {user.email}
          </h4>

          {/* <button
                onClick={() => handleDeleteOrder(_id)}
                className="text-white font-bold bg-red-700 p-2 rounded-md my-1"
              >
                Cancel This Order
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
