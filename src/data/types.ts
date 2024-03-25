export interface CVJob {
  startDate: Date;
  endDate: Date;
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
  | "playwright"
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
  | "expo"
  | "kibana"
  | "mysql"
  | "loopback"
  | "php"
  | "selenium"
  | "laravel"
  | "mysql"
  | "symphony"
  | "angular"
  | "javascript"
  | "nest"
  | "figma"
  | "java"
  | "python";
