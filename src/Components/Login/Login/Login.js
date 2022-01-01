import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useLocation } from "react-router";
import Headers from "../../Shared/Navbar/Headers";
import "./Login.css";

const Login = () => {
  const { loginUserWithEmail } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginUserWithEmail(data.email, data.password, location, history);
  };

  const handleRegisterDriver = () => {
    history.push("/registerrider");
  };
  const handleRegisterLearner = () => {
    history.push("/registerlearner");
  };

  return (
    <div>
      <Headers></Headers>
      <div className="container w-1/2 mx-auto m-64 bg-color rounded shadow-xl p-8">
        <h2 className="text-center text-2xl font-bold my-3">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="border w-1/2 my-3 ml-2 p-3 rounded"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <input
              className="border w-1/2 ml-2 p-3 rounded"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>

          <button
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
          >
            Signing
          </button>
          <p>Dont have any account?</p>
          <div>
            <button onClick={handleRegisterDriver} className="underline mx-3">
              Registe as Rider
            </button>
            <button onClick={handleRegisterLearner} className="underline mx-3">
              registe as learner
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
