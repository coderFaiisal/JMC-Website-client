import React, { useEffect } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import useTitle from "../../hooks/useTitle";

const TalentHunt = () => {
  useTitle("Media Star");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <img
          className="w-full max-h-screen"
          src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pE3fowfMJDr-AAq_LGpEi_TwYUEbL3yjYZTG7LZoIHSiYKF89aRUQTyKZypfxDQ7iCskRjLItVBsEMRmabylWJ-ssK=w1920-h1080-k-pd"
          alt=""
        />
      </div>
      <div className="my-4 px-16 bg-gray-100 m-20 p-10 rounded-xl">
        <h1 className="text-2xl lg:text-4xl text-blue-600 text-center underline underline-offset-4 ">
          Overview of the Program
        </h1>
        <p className=" text-lg my-4">
          The Department of Journalism, Media and Communication (JMC), DIU has
          organized this competition with the ‘Be a Media Star’ for the HSC
          passed students who are interested to study four-year bachelor program
          in Journalism, Media and Communication. It is regular signature event
          of the department to encourage the students to study in the department
          of in Journalism, Media and Communication. The top performer of the
          competition will get special waiver to take admission in the
          department.
        </p>
        <h1 className="text-2xl lg:text-2xl text-blue-600 text-center underline underline-offset-4 ">
          Assessment Process and Waiver
        </h1>
        <p className=" text-lg my-4">
          Assessment process will be in the grading system. Like, A+, A, and A-
        </p>
        <ul className="ml-10">
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> A+ (plus)will get
            100% tuition fees waiver and results have to be maintained at least
            SGPA 3.50
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" />A (plain)will get 50
            % tuition fees waiver and results have to be maintained at least
            SGPA 3.25
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> A- (minus)will get
            25% tuition fees waiver and results have to be maintained at least
            SGPA 3.00
          </li>
        </ul>
        <h1 className="text-2xl lg:text-2xl text-blue-600 text-center underline underline-offset-4  my-6">
          How to Participate
        </h1>
        <ul className="ml-10">
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> Complete your
            registration
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> Attend the briefing
            session
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> In the briefing
            session a topic will be given for writing a report
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> Write a Report
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" /> Submit your report
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" />
            Attend the final interaction session
          </li>
          <li className="flex">
            <ChevronDoubleRightIcon className="w-4 mr-4" />
            Win scholarship and take admission in the department of Journalism,
            Media and Communication
          </li>
        </ul>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkgiKBSqdTsy9MrX01vVs-59Ac7t2Y-g7nh6iaxwStWcN8SQ/closedform"
          target="_blank"
          className="bg-blue-600 p-2 text-white text-xl rounded-lg  hover:bg-green-800 w-2/5 text-center flex mx-auto justify-center mt-6"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default TalentHunt;
