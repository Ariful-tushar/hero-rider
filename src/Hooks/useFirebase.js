import React, { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

// import { storage } from "firebase";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isRider, setIsRider] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // REGISTER USER
  const registerUserWithEmailAsRider = (
    email,
    password,
    riderData,
    history
  ) => {
    setIsLoading(true);
    // console.log(riderData.drivingLicencePicture[0]);
    console.log("Email", email);
    console.log("Password", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(riderData);
        setUser(riderData);
        saveUser(
          email,
          riderData.name,
          riderData.phone,
          riderData.age,
          true,
          "POST"
        );
        const formData = new FormData();
        formData.append("nidPicture", riderData.nidPicture[0]);
        formData.append(
          "drivingLicencePicture",
          riderData.drivingLicencePicture[0]
        );
        formData.append("isRider", "true");
        formData.append("profilePicture", riderData.profilePicture[0]);
        formData.append("email", email);
        formData.append("name", riderData.name);
        formData.append("phone", riderData.phone);
        formData.append("address", riderData.address);
        formData.append("age", riderData.age);
        formData.append("carName", riderData.carName);
        formData.append("carModel", riderData.carModel);
        formData.append("vehicleType", riderData.vehicleType);
        formData.append("area", riderData.area);
        formData.append("namePlate", riderData.namePlate);
        // console.log(formData);

        fetch("https://arcane-garden-71437.herokuapp.com/riders", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        // saveRider(formData, "POST");
        updateProfile(auth.currentUser, {
          displayName: riderData.name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUserWithEmailAsLearner = (
    email,
    password,
    learnerData,
    history
  ) => {
    setIsLoading(true);
    // console.log(riderData.drivingLicencePicture[0]);
    console.log("Email", email);
    console.log("Password", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(learnerData.email);
        setUser(learnerData);
        saveUser(
          email,
          learnerData.name,
          learnerData.phone,
          learnerData.age,
          false,
          "POST"
        );

        const formData = new FormData();

        formData.append("nidPicture", learnerData.nidPicture[0]);
        formData.append("profilePicture", learnerData.profilePicture[0]);
        formData.append("email", email);
        formData.append("name", learnerData.name);
        formData.append("phone", learnerData.phone);
        formData.append("address", learnerData.address);
        formData.append("age", learnerData.age);
        formData.append("vehicleType", learnerData.vehicleType);
        console.log(formData);

        fetch("https://arcane-garden-71437.herokuapp.com/learners", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        // saveRider(formData, "POST");
        updateProfile(auth.currentUser, {
          displayName: learnerData.name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUserWithEmail = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // LOGOUT USER
  const logOut = () => {
    setIsLoading(true);
    console.log("Trying to logout");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  useEffect(() => {
    // setIsLoading(true);
    fetch(`https://arcane-garden-71437.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);

        // setIsLoading(false);
      });
  }, [user.email]);

  useEffect(() => {
    // setIsLoading(true);
    fetch(`https://arcane-garden-71437.herokuapp.com/users?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users[0].isRider);
        setIsRider(data.users[0].isRider);
      });
  }, [user.email]);

  const saveUser = (email, name, phone, age, isRider, method) => {
    const user = { email, name, phone, age, isRider };
    fetch("https://arcane-garden-71437.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    isLoading,
    isRider,

    registerUserWithEmailAsRider,
    registerUserWithEmailAsLearner,
    loginUserWithEmail,
    logOut,
  };
};

export default useFirebase;
