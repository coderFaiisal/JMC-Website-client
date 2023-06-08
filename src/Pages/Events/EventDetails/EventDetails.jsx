import {
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  const handleEventRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.resetEmail.value;
    console.log(email);
  };
  return (
    <div className="">
      <img
        className="w-full max-h-screen"
        src="https://images.pexels.com/photos/8345978/pexels-photo-8345978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="ui/ux review check"
      />
      <div className="w-4/5 mx-auto">
        <h1 className="my-4 text-3xl font-bold">
          <span className="text-blue-600">Discussion Topic</span> : Quos sed
          ullam cum aperiam omnis perspiciatis illum quam fuga.
        </h1>
        <h2 className="text-2xl text-blue-800 font-serif font-semibold">
          Guest: Sulaiman Shukhon
        </h2>
        <p className="leading-7 text-lg text-gray-700 my-4">
          Details : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae, in! Consequatur officia vitae omnis eum temporibus quis
          eligendi nesciunt minima maxime facere! Ut unde sed sit repudiandae
          error autem ex. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Atque animi omnis maxime sequi corrupti, praesentium nemo quos,
          adipisci quam aliquam similique? Reiciendis distinctio cupiditate rem
          suscipit quod repellendus repudiandae assumenda!
        </p>
        <Link to={`/eventRegistration/${"id"}`}>
          <button className="hover:bg-green-800 bg-blue-700 w-2/6 text-white text-xl p-1 rounded-lg flex justify-center mx-auto">
            Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
