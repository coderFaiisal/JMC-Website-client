import React from "react";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { List } from "@material-tailwind/react";

const TalentHunt = () => {
  return (
    <div>
      <div>
        <iframe
          className="w-1/2 mx-auto h-40 md:h-60 lg:h-80"
          src="https://rr3---sn-h5576ns6.c.drive.google.com/videoplayback?expire=1686241646&ei=LcmBZMe_O57S-LYPvaW_qAE&ip=58.145.186.225&cp=QVRNWENfUFZSR1hPOnFNdmEwZm9KOEpfbzZJRGgtY2FyTzNnUkpYUG80VS0wUFNjM1p4bHk5ckE&id=d3d084e05e6c1037&itag=22&source=webdrive&requiressl=yes&mh=Ch&mm=32&mn=sn-h5576ns6&ms=su&mv=m&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1-ipN909NtSNs7Fiiv7fw8JqFHMwFl01O&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=56.656&lmt=1634892044064113&mt=1686226855&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgRgkWYTkjwz7Z1TeRwskptzqoELcBefFJQpsUg4JUKfsCIQClSrA-pVE0cTPo4HbURF9wMd79hOYfSeiWjIvMS4I6tg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgASmNkdTldqXMI2WS1Oicj0ECT69LTcdsnn3BCIR2t0wCIBOTj7454klw54ZgcgnjgXo1QqG2d0jEmZGuncFFRhR4&cpn=YW_5ip0MEmJ7hw6p&c=WEB_EMBEDDED_PLAYER&cver=1.20230604.00.00"
          frameborder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="my-4 px-16 bg-gray-100 m-20 p-10 rounded-xl">
        <h1 className="text-2xl lg:text-4xl text-blue-600 text-center underline underline-offset-4 font-serif">
          Overview of the Program
        </h1>
        <p className="font-serif text-lg my-4">
          The Department of Journalism, Media and Communication (JMC), DIU has
          organized this competition with the ‘Be a Media Star’ for the HSC
          passed students who are interested to study four-year bachelor program
          in Journalism, Media and Communication. It is regular signature event
          of the department to encourage the students to study in the department
          of in Journalism, Media and Communication. The top performer of the
          competition will get special waiver to take admission in the
          department.
        </p>
        <h1 className="text-2xl lg:text-2xl text-blue-600 text-center underline underline-offset-4 font-serif">
          Assessment Process and Waiver
        </h1>
        <p className="font-serif text-lg my-4">
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
        <h1 className="text-2xl lg:text-2xl text-blue-600 text-center underline underline-offset-4 font-serif my-6">
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
          className="bg-blue-600 p-2 text-white text-xl rounded-lg font-serif hover:bg-green-800 w-2/5 text-center flex mx-auto justify-center mt-6"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default TalentHunt;
