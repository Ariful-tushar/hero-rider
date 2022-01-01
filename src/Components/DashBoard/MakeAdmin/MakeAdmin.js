import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./../../../Hooks/useAuth";

const MakeAdmin = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/users/makeadmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccess(true);
          reset(data);
        } else {
          setError(true);
          reset();
        }
      });
  };

  if (success) {
    return <div>Success</div>;
  }

  return (
    <div>
      <div className="border mt-52 lg:mt-0 lg:py-32">
        <h2 className="w-1/2 mx-auto text-red-500 font-bold text-2xl text-left mb-4">
          Please enter the email which you want to make as an Admin:
        </h2>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="my-5 bg-gray-200 rounded-lg w-1/2 p-5"
              type="email"
              placeholder="Email"
              {...register("Email")}
            />
          </div>

          <input
            className="font-bold text-white cursor-pointer border rounded-lg p-2 lg:p-4 hover:bg-blue-800 bg-blue-600"
            type="submit"
            value="Make Admin"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
