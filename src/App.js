import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Baner from "./Components/Home/Baner/Baner";
import RegisterRider from "./Components/Login/Login/RegisterRider";
import RegisterLearner from "./Components/Login/Login/RegisterLearner";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login/Login";
import Home from "./Components/Home/Home/Home";
import Profile from "./Components/Profile/Profile";
import LearningPackage from "./Components/LearningPackage/LearningPackage";
import Payment from "./Components/DashBoard/Payment/Payment";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/registerrider">
              <RegisterRider></RegisterRider>
            </Route>
            <Route exact path="/registerlearner">
              <RegisterLearner></RegisterLearner>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/myprofile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/learningpackage">
              <LearningPackage></LearningPackage>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
