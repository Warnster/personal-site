export interface CVJob {
  date: string;
  companyName: string;
  title: string;
  description: string;
  companyImageUrl: string;
  companyImageLink: string;
  companyImageAlt: string;
  badges: Badges[];
}

export type Badges =
  | "react"
  | "react-native"
  | "next"
  | "aws"
  | "azure"
  | "sql-server"
  | "mongo"
  | "docker"
  | "node"
  | "typescript"
  | "storybook"
  | "graphql"
  | "jest"
  | "expo";
