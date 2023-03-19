import { CVJob } from "./types";

export const cvJobs: CVJob[] = [
  {
    date: "May 2022 - Jan 2023 · 9 months",
    companyName: "Shell · Contract",
    title: "Senior Full Stack Engineer",
    description:
      "This role involved building an emission tracking software as part of a small team of devs, designers and project owners. I was based in the “agile hub” department which is focused on R&D products. I identified inefficiencies and weaknesses in the current ways of working and liaised with the lead dev and project managers to rectify these. The stack was Typescript, React frontend and monolith Graphql backend with Microsoft server sql, each of these I worked on daily. Other libraries included storybook and launchdarkly which I implemented for feature flagging",
    companyImageUrl: "/shell.jfif",
    companyImageLink: "https://www.linkedin.com/company/shell/",
    companyImageAlt: "Shell Logo",
    badges: ["react", "typescript", "node", "sql-server", "azure", "next", "mongo", "storybook", "graphql", "docker"],
  },
  {
    date: "May 2021 - Apr 2022 · 1 year",
    companyName: "AND Digital · Contract",
    title: "Full Stack Engineer",
    description:
      "I worked as a consultant for Covea Insurance. The tech for the role was Typescript,React Native/React/NextJS and Nodejs/Loopback/graphql. I gained great experience in working in a large corporation and team. Streamlining and improving team efficiency and throughput as well as dealing with problems which can affect large projects or teams. This role has involved development of microservices and a micro frontend with a heavy emphasis on contract and regression testing. Other libraries included storybook and launchdarkly",
    companyImageUrl: "/And-digital.jfif",
    companyImageLink: "https://www.linkedin.com/company/and_digital/",
    companyImageAlt: "And Digital Logo",
    badges: ["react", "react-native", "next", "typescript", "node", "mongo", "storybook", "aws", "docker", "expo"],
  },
  {
    date: "Jul 2020 - Apr 2021 · 10 months",
    companyName: "Tomorrow's Guide . Contract",
    title: "Full Stack Engineer",
    description:
      "I worked as a nodejs and react developer building a replacement custom cms and review system with a team of 5 developers. It was a greenfield project to replace a high traffic system with millions of page visits per day, which was launched Sep 2020. I gained good practical experience of the management and architecture of high traffic websites. The role involved working on new features into the site and set up the cicd deployment with docker on azure containers. A microservice architecture was being used here with multiple nodejs servers specialising in their own domain and private npm packages for code reuse between node and react projects. I also gained valuable experience of a phased and then direct change over of a system.",
    companyImageUrl: "/tomorrows.png",
    companyImageLink: "https://www.linkedin.com/company/tomorrow's-guides/",
    companyImageAlt: "Tomorrow's Guide Logo",
    badges: ["react", "typescript", "node", "azure", "jest", "docker"],
  },
];
