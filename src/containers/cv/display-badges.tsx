import { AWSBadge } from "@/components/badges/aws-badge";
import { AzureBadge } from "@/components/badges/azure-badge";
import { DockerBadge } from "@/components/badges/docker-badge";
import { ExpoBadge } from "@/components/badges/expo-badge";
import { GraphQLBadge } from "@/components/badges/graphql-badge";
import { JestBadge } from "@/components/badges/jest-badge";
import { KibanaBadge } from "@/components/badges/kibana-badge";
import { LaravelBadge } from "@/components/badges/laravel-badge";
import { LoopbackBadge } from "@/components/badges/loopback-badge";
import { MongoDbBadge } from "@/components/badges/mongodb-badge";
import { MySqlBadge } from "@/components/badges/mysql-badge";
import { NextBadge } from "@/components/badges/next-badge";
import { NodeBadge } from "@/components/badges/node-badge";
import { PhpBadge } from "@/components/badges/php-badge";
import { PlaywrightBadge } from "@/components/badges/playwright-badge";
import { ReactBadge } from "@/components/badges/react-badge";
import { SeleniumBadge } from "@/components/badges/selenium-badge";
import { SqlServerBadge } from "@/components/badges/sql-server-badge";
import { StorybookBadge } from "@/components/badges/storybook-badge";
import { TypescriptBadge } from "@/components/badges/typescript-badge";
import { Badges } from "@/data/types";

export const DisplayBadges = ({ badges }: { badges: Badges[] }) => {
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
            case "expo":
              return <ExpoBadge key={badge} />;
            case "jest":
              return <JestBadge key={badge} />;
            case "kibana":
              return <KibanaBadge key={badge} />;
            case "loopback":
              return <LoopbackBadge key={badge} />;
            case "playwright":
              return <PlaywrightBadge key={badge} />;
            case "selenium":
              return <SeleniumBadge key={badge} />;
            case "laravel": 
                return <LaravelBadge key={badge}/>;
            case "php":
                return <PhpBadge key={badge}/>;
            case "mysql": 
                return <MySqlBadge key={badge}/>;
            default:
              return <span>{badge}</span>;
          }
        })}
      </>
    );
  };