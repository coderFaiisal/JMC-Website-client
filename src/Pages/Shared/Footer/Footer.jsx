import React from "react";

import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SITEMAP = [
  {
    title: "Get in Touch",
    links: [
      <Link to="/contact">Contact</Link>,
      <Link to="/reportIssues">Report on Website Issues</Link>,
      <a href="https://newsletter.daffodilvarsity.edu.bd/" target="_blank">
        Newsletters
      </a>,
      <a href="https://campuslife.daffodil.university/" target="_blank">
        DIU Photo Gallary
      </a>,
    ],
  },
  {
    title: "Branding",
    links: [
      <a href="http://bd.daffodil.family/" target="_blank">
        DIU Branding
      </a>,
      <a href="http://blog.daffodilvarsity.edu.bd/" target="_blank">
        Blog
      </a>,
      <a href="https://artofliving.social/" target="_blank">
        Art of living
      </a>,
      <a href="http://employability.daffodilvarsity.edu.bd/" target="_blank">
        Employability 360
      </a>,
    ],
  },
  {
    title: "Useful Links",
    links: [
      <a href="https://skill.jobs/" target="_blank">
        {" "}
        Skill Jobs
      </a>,
      <a
        href="http://internship.daffodilvarsity.edu.bd/?app=home"
        target="_blank"
      >
        Internship Portal
      </a>,
      <a href="https://convocation.daffodilvarsity.edu.bd/" target="_blank">
        Convocation
      </a>,
      <a href="https://daffodilvarsity.edu.bd/prospectus" target="_blank">
        Prospectus
      </a>,
      <a href="https://daffodilvarsity.edu.bd/article/forms" target="_blank">
        Forms
      </a>,
    ],
  },
  {
    title: "More",
    links: [
      <a href="https://daffodilvarsity.edu.bd/article/apps" target="_blank">
        Apps
      </a>,
      <Link to="location">Location Map</Link>,
      <a href="https://it.daffodilvarsity.edu.bd/#team-2" target="_blank">
        DIU IT
      </a>,
      <a href="https://daffodilvarsity.edu.bd/faq" target="_blank">
        FAQ
      </a>,
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid mx-auto w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-4 font-bold uppercase"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="white"
                    className="font-normal opacity-80"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 hover:scale-105 hover:text-blue-600"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full items-center justify-center border-t border-white py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center text-white font-normal md:mb-0"
          >
            &copy; {currentYear} Daffodil International University | All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
