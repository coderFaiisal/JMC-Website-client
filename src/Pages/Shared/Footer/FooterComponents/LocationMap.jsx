import React from "react";

const LocationMap = () => {
  return (
    <div className="my-12">
      <div className="text-center mb-4 grid gap-4 ">
        <h1 className="text-3xl text-blue-500 ">
          Daffodil International University
        </h1>
        <p>Daffodil Smart City (DSC)</p>
        <p>Birulia, Savar, Dhaka-1216.</p>
        <p>Cell: 01847140095, 01811458841, 01713493141</p>
        <p> E-mail: admission@daffodilvarsity.edu.bd</p>{" "}
        <p>https://daffodilvarsity.edu.bd</p>
      </div>
      <div>
        <iframe
          width="100%"
          height="400px"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14593.578624296777!2d90.31154703612818!3d23.87562027397785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c23dd12bbc75%3A0x313d214552eabe56!2sDaffodil%20Smart%20City!5e0!3m2!1sen!2sbd!4v1661582221276!5m2!1sen!2sbd"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
