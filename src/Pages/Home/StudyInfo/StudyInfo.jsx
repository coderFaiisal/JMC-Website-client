import React from "react";
import {
  BanknotesIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const StudyInfo = () => {
  return (
    <section className=" bg-black min-h-screen text-white flex justify-center gap-10 p-20">
      <div>
        <h1 className="text-3xl text-center mb-2">PROGRAMS</h1>
        <div className="grid gap-4">
          <a
            href="https://daffodilvarsity.edu.bd/department/jmc/program/14/1/undergraduate"
            target="_blank"
          >
            <div className="text-white border text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <AcademicCapIcon className="w-14 h-14" />
              <h1 className="ml-6">UNDERGRADUATE</h1>
            </div>
          </a>

          <a
            href="https://daffodilvarsity.edu.bd/department/jmc/program/14/2/post-graduate"
            target="_blank"
          >
            <div className="text-white border text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <AcademicCapIcon className="w-14 h-14" />
              <h1 className="ml-6">POST GRADUATE</h1>
            </div>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center mb-2">ADMISSION</h1>
        <div className="grid gap-4">
          <a
            href="https://pd.daffodilvarsity.edu.bd/admission/online"
            target="_blank"
          >
            <div className="text-white bg-[#1C448E] text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <NewspaperIcon className="w-14 h-14" />
              <h1 className="ml-12">APPLY NOW</h1>
            </div>
          </a>

          <a
            href="https://daffodilvarsity.edu.bd/department/jmc/local-tuition"
            target="_blank"
          >
            <div className="text-white bg-[#1C448E] text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <BanknotesIcon className="w-14 h-14" />
              <h1 className="ml-12">TUITION FEE</h1>
            </div>
          </a>

          <a
            href="https://daffodilvarsity.edu.bd/department-admission-eligibility/jmc"
            target="_blank"
          >
            <div className="text-white bg-[#1C448E] text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <QuestionMarkCircleIcon className="w-14 h-14" />
              <h1 className="ml-12">ELIGIBILITY</h1>
            </div>
          </a>
          
          <a
            href="https://daffodilvarsity.edu.bd/dept/jmc/scholarship/diu-scholarship"
            target="_blank"
          >
            <div className="text-white bg-[#1C448E] text-2xl flex gap-4 items-center w-96 py-6 px-2">
              <AcademicCapIcon className="w-14 h-14" />
              <h1 className="ml-12">SCHOLARSHIP</h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudyInfo;
