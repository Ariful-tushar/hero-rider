import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useHistory,
} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Users from "../Users/Users";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut, isLoading } = useAuth();
  const history = useHistory();
  const handleHomeButton = () => {
    history.push("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!admin) {
    return (
      <div>
        <h1 className="text-4xl font-bold my-5">You are not an admin!</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={handleHomeButton}
        >
          Go to home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center mb-5 p-5 border-2 bg-cyan-900">
      <Link className="p-2 boder-2 text-white rounded-lg text-xl" to={`/home`}>
        <div>
          <p>Home</p>
        </div>
      </Link>
      <Link
        className="p-2 boder-2 text-white rounded-lg text-xl"
        to={`${url}/makeadmin`}
      >
        <div>
          <p>MakeAdmin</p>
        </div>
      </Link>
      <Link
        className="p-2 boder-2 text-white rounded-lg text-xl"
        to={`${url}/users`}
      >
        <div>
          <p>Users</p>
        </div>
      </Link>
      <Link
        onClick={logOut}
        className="p-2 boder-2 text-white rounded-lg text-xl"
      >
        <div>
          <p>Logout</p>
        </div>
      </Link>
      <Switch>
        <Route exact path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
      <Switch>
        <Route exact path={`${path}/users`}>
          <Users></Users>
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
