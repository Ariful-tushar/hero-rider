import React, { useEffect, useState } from "react";
import User from "./User";
import "./Users.css";
import { useHistory } from "react-router-dom";

const Users = () => {
  const { isLoading } = useState(true);
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const size = 10;
  useEffect(() => {
    fetch(
      `https://arcane-garden-71437.herokuapp.com/users?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        const pageCount = Math.ceil(data.count / size);
        setPageCount(pageCount);
      });
  }, [page]);

  const handleInputChange = (e) => {
    const searchedUser = users.find(
      (user) =>
        user.email === e.target.value ||
        user.name === e.target.value ||
        user.phone === e.target.value
    );
    setUsers([searchedUser]);
  };

  const handleAgeFilter = (e) => {
    const text = e.target.innerText;
    if (text === "Age 40+") {
      const filteredUsers = users.filter((user) => user.age > 40);
      setUsers(filteredUsers);
    } else if (text === "Age 26-40") {
      const filteredUsers = users.filter(
        (user) => user.age >= 26 && user.age <= 40
      );
      setUsers(filteredUsers);
    } else if (text === "Age 18-25") {
      const filteredUsers = users.filter(
        (user) => user.age >= 18 && user.age <= 25
      );

      setUsers(filteredUsers);
    } else {
      setUsers(users);
    }
  };

  const handleNoUser = () => {
    history.push("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (users.length === 0) {
    return (
      <div className="container border-2 border-gray-50 p-4">
        <h1 className="text-2xl font-bold text-white">No user found!</h1>
        <button onClick={handleNoUser} className="border-2 p-2 text-white">
          Go to home
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input
          onBlur={handleInputChange}
          className="border-2 border-black w-1/2 p-2"
          type="text"
          placeholder="Enter username/email/phone"
        />
        <button className="border-2 p-2 text-white">Search</button>
      </div>
      <div className="flex justify-center text-white">
        <div
          onClick={handleAgeFilter}
          className="border-2 p-2 cursor-pointer m-1"
        >
          Age 18-25
        </div>
        <div
          onClick={handleAgeFilter}
          className="border-2 p-2 cursor-pointer m-1"
        >
          Age 26-40
        </div>
        <div
          onClick={handleAgeFilter}
          className="border-2 p-2 cursor-pointer m-1"
        >
          Age 40+
        </div>
        <div
          onClick={handleAgeFilter}
          className="border-2 p-2 cursor-pointer m-1"
        >
          Clear Filter
        </div>
      </div>

      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}

      <div>
        {[...Array(pageCount).keys()].map((i) => (
          <button
            onClick={() => setPage(i)}
            className={
              i === page
                ? "border-2 border-black p-1 m-1 selected"
                : "border-2 border-black p-1 m-1 text-white"
            }
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
