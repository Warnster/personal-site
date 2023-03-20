"use client";
import { cvJobs } from "@/data/cv-data";
import { CVJob } from "@/data/types";
import Image from "next/image";
import { DisplayBadges } from "./display-badges";
import { ProfileImage } from "@/components/profile-image/profile-image";


export const CV = () => {
  return (
    <div className="grid grid-cols-cv">
      <div className="md:hidden col-span-full">
        <h1 className="text-3xl text-center py-4">Curriculum Vitae</h1>
      </div>
      <div className="col-span-full md:col-span-1 bg-gray-600 pt-4 text-gray-200 pb-8 px-4">
        <ProfileImage />
        <h1 className="text-2xl text-center">Lewis Warner</h1>
        <p className="mx-2 mt-2">
        I’ve spent 6 years in corporate software engineering; my experience is based around Nodejs, React, Docker Graphql and Linux. I strive to learn as much as I can to help come up with the best solutions to software problems. As I’ve progressed into more senior roles I’ve enjoyed coaching juniors and outlining / implementing software methodologies, processes and improvements.
        </p>
      </div>
      <div className="col-span-full md:col-span-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-center  hidden md:block">Curriculum Vitae</h1>
          <h2 className="text-2xl mb-8 mt-2 text-center md:text-left">Work Experience</h2>
          {cvJobs.map((job) => {
            return <CVRow key={job.companyName} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const CVRow = ({ job }: { job: CVJob }) => {
  const badges = job.badges;

  return (
    <div className="grid grid-cols-cv-row gap-4 mb-8">
      <div className="col-span-1">
        <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
          <a href={job.companyImageLink} target="_blank">
            <Image
              src={job.companyImageUrl}
              width={64}
              height={64}
              alt={job.companyImageAlt}
            />
          </a>
        </div>
      </div>
      <div className="col-span-2">
        <p>{job.title}</p>
        <p className="mt-1 text-gray-500">{job.companyName}</p>
        <p className="mt-1 text-gray-500">{job.date}</p>
      </div>
      <div className="col-span-full">
        <p className="text-md">{job.description}</p>
      </div>

      <div className="col-span-full">
        {/** write a rounded button with a gradient colour going from purple to pink, on hover it should highlight */}

        <DisplayBadges badges={badges} />
      </div>
    </div>
  );
};

const JobIconPlaceholder = () => {
  return (
    <svg
      className="h-full w-full text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
};
