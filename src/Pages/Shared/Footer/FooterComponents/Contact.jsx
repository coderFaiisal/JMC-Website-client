import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="my-12 mx-auto w-2/3 grid gap-2">
      <h1 className="text-center text-3xl text-blue-600 mb-4 ">
        Contact Information
      </h1>
      <h2 className="text-xl font-"> Daffodil International University</h2>
      <h3>Daffodil Smart City (DSC)</h3>
      <p> Birulia, Savar, Dhaka-1216</p>
      <p>Tel: +8802224441833, +8802224441834</p> <p>Help Line: 09617901212</p>
      <p>Fax: +8802224441835</p>
      <p>Cell: 01847140095, 01811458841, 01713493141</p>
      <p>
        E-mail: <a className="text-blue-500" href="admission@daffodilvarsity.edu.bd" target="_blank">admission@daffodilvarsity.edu.bd
        </a>
      </p>
      <p>
        Facebook:
        <a
          className="text-blue-500"
          href="https://www.facebook.com/daffodilvarsity.edu.bd" target="_blank"
        >
          https://www.facebook.com/daffodilvarsity.edu.bd
        </a>
      </p>
      <p>Website: <a className="text-blue-500" href="www.daffodil.university" target="_blank">www.daffodil.university</a></p>
    </div>
  );
};

export default Contact;
