import { CVJob } from "./types";

export const cvJobs: CVJob[] = [
  {
    startDate: new Date("2023-03-01"),
    endDate: new Date("2024-02-28"),
    companyName: "ARM PLC . Contract",
    title: "Lead Frontend Engineer",
    description: "I am currently leading the continued development of the ARM documentation website (developer.arm.com/documentation) and the forums product (community.arm.com), as well as various internal tools for ARM. My role, primarily front-end focused, includes overseeing a team of three developers and testers. While I am still actively involved in development using React and Next.js and design with Figma, my responsibilities also include planning upcoming features, liaising with stakeholders, external design companies, and other internal teams. This role also involves task management, sprint planning, and overseeing the testing and deployment process",
    companyImageUrl: "/arm.jpeg",
    companyImageLink: "https://www.linkedin.com/company/arm/",
    companyImageAlt: "Arm Logo",
    badges: ["react", "typescript", "next", "figma"],
  },
  {
    startDate: new Date("2022-05-01"),
    endDate: new Date("2023-01-28"),
    companyName: "Shell · Contract",
    title: "Senior Full Stack Engineer",
    description:
      "This role involved building an emission tracking software as part of a small team of devs, designers and project owners. I was based in the “agile hub” department which is focused on R&D products. I identified inefficiencies and weaknesses in the current ways of working and liaised with the lead dev and project managers to rectify these. The stack was Typescript, React frontend and monolith Graphql backend with Microsoft server sql, each of these I worked on daily. Other libraries included storybook and launchdarkly which I implemented for feature flagging",
    companyImageUrl: "/shell.jfif",
    companyImageLink: "https://www.linkedin.com/company/shell/",
    companyImageAlt: "Shell Logo",
    badges: ["react", "typescript", "node", "playwright","sql-server", "azure", "next", "mongo", "storybook", "graphql", "docker", "jest", "kibana"],
  },
  {
    startDate: new Date("2021-05-01"),
    endDate: new Date("2022-04-28"),
    companyName: "AND Digital · Contract",
    title: "Full Stack Engineer",
    description:
      "I worked as a consultant for Covea Insurance. The tech for the role was Typescript,React Native/React/NextJS and Nodejs/Loopback/graphql. I gained great experience in working in a large corporation and team. Streamlining and improving team efficiency and throughput as well as dealing with problems which can affect large projects or teams. This role has involved development of microservices and a micro frontend with a heavy emphasis on contract and regression testing. Other libraries included storybook and launchdarkly",
    companyImageUrl: "/And-digital.jfif",
    companyImageLink: "https://www.linkedin.com/company/and_digital/",
    companyImageAlt: "And Digital Logo",
    badges: ["react", "react-native", "next", "typescript", "node", "mongo", "storybook", "aws", "docker", "expo", "jest", "kibana", "loopback", "selenium"],
  },
  {
    startDate: new Date("2020-07-01"),
    endDate: new Date("2021-04-28"),
    companyName: "Tomorrow's Guide . Contract",
    title: "Full Stack Engineer",
    description:
      "I worked as a nodejs and react developer building a replacement custom cms and review system with a team of 5 developers. It was a greenfield project to replace a high traffic system with millions of page visits per day, which was launched Sep 2020. I gained good practical experience of the management and architecture of high traffic websites. The role involved working on new features into the site and set up the cicd deployment with docker on azure containers. A microservice architecture was being used here with multiple nodejs servers specialising in their own domain and private npm packages for code reuse between node and react projects. I also gained valuable experience of a phased and then direct change over of a system.",
    companyImageUrl: "/tomorrows.png",
    companyImageLink: "https://www.linkedin.com/company/tomorrow's-guides/",
    companyImageAlt: "Tomorrow's Guide Logo",
    badges: ["react", "typescript", "node", "azure", "jest", "docker", "sql-server"],
  },
  {
    startDate: new Date("2019-01-01"),
    endDate: new Date("2020-09-28"),
    companyName: "Ethixbase",
    title: "Full Stack Engineer",
    description:
      `This position involved working with several technologies including: nodejs, docker, linux, SSO, aws, nginx, javascript, react, babel, webpack, gitlab cicd,, mongodb. This position involved development, design and maintenance of multiple RegTech systems.
      The Roles included
      Designing and building a new microservice RESTFUL API’s with, in php (Laravel, lumen) or nodejs (express or nestjs) depending on microservice requirements.
      Implementing Single Sign On authentication into the main application for corporate clients.
      Automating the testing and deployment using gitlab cicd, codeception, jest and robot framework.
      Containerising multiple applications with docker to speed up development and testing on environments and managing of microservices.
      Giving tutorials / training to fellow employees over several topics including: Frontend / backend Frameworks, Migrations, Testing, Continuous Integrations and SSO
      Identifying and Creating Requirements from client meetings.
      Working with a team of 9 developers, sometimes in a lead position depending on the project.
      Normalisation of database schemas and legacy data migration.
      Move production and development environments from digital ocean to AWS with automatic deployment done through docker + Kubernetes on ecs
      Design and implementation of a migration from hybrid js and php legacy frontend to React`,
    companyImageUrl: "/ethixbase.jfif",
    companyImageLink: "https://www.linkedin.com/company/ethixbase360/",
    companyImageAlt: "Ethixbase360 Logo",
    badges: ["react", "typescript", "node", "aws", "jest", "docker", "mysql", "php", "laravel", "nest"],
  },
  {
    startDate: new Date("2017-09-01"),
    endDate: new Date("2018-12-28"),
    companyName: "Goobie",
    title: "Founder",
    description: `This role involved building a restful API in NodeJS (NestJs) with a Javascript React frontend. React Native IOS and Android app. The webapp being developed was a customer / admin style portal for musicians and venues to create and manage events. I hosted it on amazon web services, this involved using EC2, Cloudfront, S3, Pinpoint, Route 53, Load balancing, rds and auto scaling. I worked on hosting the platform in AWS with docker containers.`,
    companyImageUrl: "",
    companyImageLink: "",
    companyImageAlt: "",
    badges: ["react", "aws", "react-native", "node", "docker", "typescript"]
  },
  {
    startDate: new Date("2016-05-01"),
    endDate: new Date("2018-08-28"),
    companyName: "Lawson Connor",
    title: "Full Stack Engineer",
    description: `This role involved continued development and complete migration of code, data and architecture from the monolithic MPA to microservices. Microservices were built using symphony 3 php. The team used an agile approach and consisted of 5 developers. I worked with experienced developers and really grew my knowledge and skill in building loosely coupled microservices, each with it’s own separation of concern. The frontend was rebuilt with Angular 2. I gained experience in how to safely migrate data and restructure the database schema to be normalised.`,
    companyImageUrl: "/lawson-connor.png",
    companyImageLink: "https://pitchbook.com/profiles/company/170855-20#overview",
    companyImageAlt: "Lawson Connor Logo",
    badges: ["angular", "symphony", "mysql", "php", "javascript",]
  },
];
