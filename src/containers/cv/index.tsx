import { AWSBadge } from "@/components/badges/aws-badge";
import { AzureBadge } from "@/components/badges/azure-badge";
import { DockerBadge } from "@/components/badges/docker-badge";
import { GraphQLBadge } from "@/components/badges/graphql-badge";
import { MongoDbBadge } from "@/components/badges/mongodb-badge";
import { NextBadge } from "@/components/badges/next-badge";
import { NodeBadge } from "@/components/badges/node-badge";
import { ReactBadge } from "@/components/badges/react-badge";
import { SqlServerBadge } from "@/components/badges/sql-server-badge";
import { StorybookBadge } from "@/components/badges/storybook-badge";
import { TypescriptBadge } from "@/components/badges/typescript-badge";
import { cvJobs } from "@/data/cv-data";
import { Badges, CVJob } from "@/data/types";
import Image from "next/image";

export const CV = () => {
  return (
    <div className="lg:px-16 px-4">
      <h1 className="text-3xl text-center mb-2">Curriculum Vitae</h1>
      <h2 className="text-2xl mb-8">Work Experience</h2>
      {cvJobs.map((job) => {
        return <CVRow key={job.companyName} job={job} />;
      })}
    </div>
  );
};

const DisplayBadges = ({ badges }: { badges: Badges[] }) => {
  return (
    <>
    {badges.map((badge) => {
      switch (badge) {
        case "react":
          return <ReactBadge key={badge} title={"React"} />;
        case "react-native":
          return <ReactBadge key={badge} title={"React Native"} />;
        case "next":
          return <NextBadge key={badge} />;
        case "graphql":
          return <GraphQLBadge key={badge} />;
        case "node":
          return <NodeBadge key={badge} />;
        case "typescript":
          return <TypescriptBadge key={badge} />;
        case "azure":
          return <AzureBadge key={badge} />;
        case "sql-server":
          return <SqlServerBadge key={badge} />;
        case "mongo":
          return <MongoDbBadge key={badge} />;
        case "aws":
          return <AWSBadge key={badge} />;
        case "storybook":
          return <StorybookBadge key={badge} />;
        case "docker":
          return <DockerBadge key={badge} />;
        default:
          return <span>{badge}</span>
      }
    })}
    </>
  );
};

export const CVRow = ({ job }: { job: CVJob }) => {
  return (
    <div className="grid grid-cols-cv gap-4 mb-8">
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
      <div className="col-span-1">
        <p>{job.title}</p>
        <p className="mt-1 text-gray-500">{job.companyName}</p>
        <p className="mt-1 text-gray-500">{job.date}</p>
      </div>
      <div className="col-span-full">
        <p className="text-md">{job.description}</p>
      </div>
      
      <div className="col-span-full">
        <DisplayBadges badges={job.badges}/>
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
