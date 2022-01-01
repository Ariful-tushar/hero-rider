import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Headers from "../../Shared/Navbar/Headers";

const Login = () => {
  const { user, registerUserWithEmailAsRider, isLoading } = useAuth();

  const { register, handleSubmit } = useForm();
  // const location = useLocation();

  const history = useHistory();
  const handleSignIn = () => {
    history.push("/login");
  };

  const onSubmit = (data) => {
    let userData = { ...data };
    delete userData.password;

    registerUserWithEmailAsRider(data.email, data.password, userData, history);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Headers></Headers>
      <div className="container w-3/5 mx-auto m-20 bg-color rounded shadow-xl p-8">
        <h2 className="text-center text-2xl font-bold my-3">
          Register As a Rder
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="Full Name"
              {...register("name")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="age"
              {...register("age")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="address"
              {...register("address")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="phone"
              {...register("phone")}
            />
          </div>
          <div>
            <div className="border w-3/5 mx-auto my-3  p-3 rounded bg-white">
              <input
                className="w-3/5 cursor-pointer"
                title="Upload Driving License"
                type="file"
                placeholder="driving licence picture"
                {...register("drivingLicencePicture")}
              />
              <label className="font-bold" htmlFor="">
                Driving Licence
              </label>
            </div>
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="area"
              {...register("area")}
            />
          </div>
          {/* <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded bg-white"
              type="file"
              placeholder="nid picture"
              {...register("nidPicture")}
            />
          </div> */}
          <div>
            <div className="border w-3/5 mx-auto my-3  p-3 rounded bg-white">
              <input
                className="w-3/5 cursor-pointer"
                title="Upload Nid Image"
                type="file"
                placeholder="Nid Picture"
                {...register("nidPicture")}
              />
              <label className="font-bold" htmlFor="">
                Nid Picture
              </label>
            </div>
          </div>
          {/* <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded bg-white"
              type="file"
              placeholder="profile picture"
              {...register("profilePicture")}
            />
          </div> */}
          <div>
            <div className="border w-3/5 mx-auto my-3  p-3 rounded bg-white">
              <input
                className="w-3/5 cursor-pointer"
                title="Upload Profile Picture"
                type="file"
                placeholder="Profil Picture"
                {...register("profilePicture")}
              />
              <label className="font-bold" htmlFor="">
                Profile Picture
              </label>
            </div>
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="carName"
              {...register("carName")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="carModel"
              {...register("carModel")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="namePlate"
              {...register("namePlate")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              placeholder="vehicleType"
              {...register("vehicleType")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <div>
            <input
              className="border w-3/5 my-3 ml-2 p-3 rounded"
              type="password"
              placeholder="confirmpassword"
              {...register("confirmpassword")}
            />
          </div>
          <button
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
          >
            Register
          </button>
          <p>
            Already have account?{" "}
            <span onClick={handleSignIn} className="underline cursor-pointer">
              Sign In
            </span>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
