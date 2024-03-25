"use client";
import { cvJobs } from "@/data/cv-data";
import { CVJob } from "@/data/types";
import Image from "next/image";
import { DisplayBadges } from "./display-badges";
import { ProfileImage } from "@/components/profile-image/profile-image";
import { ReadMore } from "@/components/read-more";
import { Description } from "./description";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { differenceInMonths, format } from "date-fns";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
export const CV = () => {

  const careerStartDate = () => {
    const dates = cvJobs.map((job) => job.startDate);
    return dates.reduce((a, b) => (a < b ? a : b));
  }

  const careerDurationYear = () => {
    const dates = cvJobs.map((job) => job.endDate);
    const maxDate = dates.reduce((a, b) => (a > b ? a : b));
    return maxDate.getFullYear() - careerStartDate().getFullYear();
  }

  return (
    <div className="grid grid-cols-cv">
      <div className="md:hidden col-span-full">
        <h1 className="text-3xl text-center">Curriculum Vitae</h1>
        
      </div>
      <div className="col-span-full md:col-span-1 bg-gray-600 pt-4 text-gray-200 pb-8 px-4">
        <ProfileImage />
        <h1 className="text-2xl text-center">Lewis Warner</h1>
        <p className="mx-2 mt-2">
          I’ve spent {careerDurationYear()} years in corporate software engineering; my experience is
          based around Nodejs, React, Docker Graphql and Linux. I strive to
          learn as much as I can to help come up with the best solutions to
          software problems. As I’ve progressed into more senior roles I’ve
          enjoyed coaching juniors and outlining / implementing software
          methodologies, processes and improvements.
        </p>
      </div>
      <div className="col-span-full md:col-span-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-center  hidden md:block">
            Curriculum Vitae
          </h1>
          <h2 className="text-2xl mb-8 mt-2 text-center md:text-left">
            Work Experience
          </h2>
          {cvJobs.map((job) => {
            return <CVRow key={job.companyName} job={job} />;
          })}
          <h2 className="text-2xl mb-8 mt-2 text-center md:text-left">
            Education
          </h2>
          <CVRow
            job={{
              badges: [],
              startDate: new Date("2015-09-01"),
              endDate: new Date("2018-05-01"),
              description: "My time at Greenwich was spent learning about the fundamentals of computer science. I specialised in learning about the theory of computer science and apply it to real-world problems. I was able to learn about the following topics: \n\n Embedded Systems - Software Engineering \n - Algorithms and Data Structures \n - Computer Architecture \n - Operating Systems \n - Networking \n - Databases - Distributed Systems - Software Project Management - Software Design \n - Software Lifecycle",
              companyName: "University of Greenwich",
              companyImageAlt: "University of Greenwich Logo",
              companyImageLink:
                "https://www.gre.ac.uk/undergraduate-courses/engsci/computer-science-bsc-hons#study-outline",
              companyImageUrl: "/greenwich.jfif",
              title: "BSc Computer Science (Hons) - First-Class Honours",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const CVRow = ({ job }: { job: CVJob }) => {
  const badges = job.badges;

  const dateDisplay = () => {
    // Calculate the difference in months
    const monthsDifference = Math.abs(differenceInMonths(job.startDate, job.endDate)) + 1;
    console.log({monthsDifference})
    // Calculate years and remaining months
    const years = Math.floor(monthsDifference / 12);
    const remainingMonths = monthsDifference % 12;

    // Format the output
    let result = "";
    if (years > 0) {
      result += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (remainingMonths > 0) {
      if (result.length > 0) result += " ";
      result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    }
    console.log({result})
    return result;
  };

  console.log(job.startDate);
  return (
    <div className="grid grid-cols-cv-row gap-4 mb-8">
      <div className="col-span-1">
        <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
          {job.companyImageUrl ? (
            <a href={job.companyImageLink} target="_blank">
              <Image
                src={job.companyImageUrl}
                width={64}
                height={64}
                alt={job.companyImageAlt}
              />
            </a>
          ) : (
            <JobIconPlaceholder />
          )}
        </div>
      </div>
      <div className="col-span-2">
        <p>{job.title}</p>
        <p className="mt-1 text-gray-500">{job.companyName}</p>
        <p className="mt-1 text-gray-500">
          {format(job.startDate, "MMMM yyyy")} -{" "}
          {format(job.endDate, "MMMM yyyy")} . {dateDisplay()}
        </p>
      </div>
      <div className="col-span-full">
        {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>      */}
        <div dangerouslySetInnerHTML={{__html: job.description}}></div>
       
      </div>

      <div className="col-span-full">
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
