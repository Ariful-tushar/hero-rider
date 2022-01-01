import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, isRider } = useAuth();

  return (
    <div className="sticky top-0">
      <nav className="bg-gray-800">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to={"/home"}>
                  <h2 className="border-2 border-yellow-500 p-2 text-2xl font-bold text-white">
                    Hero Rider
                  </h2>
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to={"/home"}
                    className="text-xl hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  {user?.email ? (
                    <div>
                      <Link
                        to={"/profile"}
                        className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        My Profile
                      </Link>

                      <Link
                        to={"/dashboard"}
                        className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Dash Board
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {isRider ? (
                    <div>
                      <Link
                        to={"/learningpackage"}
                        className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Learning Packages
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden absolute inset-y-0 right-0 flex items-center pr-2 md:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                {user?.email ? (
                  <button
                    onClick={logOut}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-xl rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-xl rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to={"/home"}
                  className=" text-xl hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                {user?.email ? (
                  <div className="flex flex-col">
                    <Link
                      to={"/myorders"}
                      className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      My Orders
                    </Link>

                    <Link
                      to={"/manageorders"}
                      className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Manage Orders
                    </Link>

                    <Link
                      to={"/addpackage"}
                      className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Package
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
                {user?.email ? (
                  <button
                    onClick={logOut}
                    className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 text-xl rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 text-xl rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Headers;
