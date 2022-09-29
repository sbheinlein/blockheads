import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `splashpage`,
    siteUrl: `https://www.blockheads.work`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion", 
    {
      resolve : `gatsby-plugin-sumo`,
      options : {
        sumoSiteId : `415b46bb2d79c21aadb8f4728ce80e19129b39d936aa28d46de7afaf75066870` //Sumo Site ID
      }
    }
  ]
};

export default config;
