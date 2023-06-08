import React from "react";
import {
  BookOpenIcon,
  ComputerDesktopIcon,
  UserIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HomeQuickLink = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 h-80 items-center">
      <Link>
        <div className="flex flex-col justify-center items-center">
          <AcademicCapIcon className="w-20 h-20 bg-black text-white rounded-full p-4 transform hover:scale-110 duration-300" />
          <p className="font-serif text-xl mt-2 hover:text-gray-600">
            Student Portal
          </p>
        </div>
      </Link>
      <Link>
        {" "}
        <div className="flex flex-col justify-center items-center">
          <ComputerDesktopIcon className="w-20 h-20 bg-black text-white rounded-full p-4 transform hover:scale-110 duration-300" />
          <p className="font-serif text-xl mt-2 hover:text-gray-600">e-Learn</p>
        </div>
      </Link>
      <Link>
        <div className="flex flex-col justify-center items-center">
          <UserIcon className="w-20 h-20 bg-black text-white rounded-full p-4 transform hover:scale-110 duration-300" />
          <p className="font-serif text-xl mt-2 hover:text-gray-600">
            Coordination officer
          </p>
        </div>
      </Link>
      <Link>
        <div className="flex flex-col justify-center items-center">
          <BookOpenIcon className="w-20 h-20 bg-black text-white rounded-full p-4 transform hover:scale-110 duration-300" />
          <p className="font-serif text-xl mt-2 hover:text-gray-600">Library</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeQuickLink;
