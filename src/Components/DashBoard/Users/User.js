import React from "react";

const User = ({ user }) => {
  const { name, email, phone, age } = user;
  return (
    <div className="w-3/4 mx-auto text-white">
      <div className="border-4 rounded-lg p-2 text-left lg:w-3/4 mx-auto my-5 text-start">
        <h2>
          <span className="font-bold">User Full Name:</span> {name}
        </h2>
        <h4>
          <span className="font-bold">Email: </span>
          {email}
        </h4>

        <h4>
          <span className="font-bold">Phone: </span>
          {phone}
        </h4>
        <h4>
          <span className="font-bold">Age: </span>
          {age}
        </h4>
        {/* <button
          onClick={() => handleDeleteOrder(_id)}
          className="text-white font-bold bg-red-700 p-2 rounded-md my-1"
        >
          Cancel This Order
        </button> */}
      </div>
    </div>
  );
};

export default User;
