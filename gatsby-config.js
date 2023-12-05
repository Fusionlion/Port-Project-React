// module.exports = {
//   siteMetadata: {
//     title: `Fusion+Code`,
//     description: `Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
//     author: `@ZCharles`,
//   },
//   plugins: [

//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/static/images`,
//         icon: `static/favicon.png`,
//       },
//     },
//     `gatsby-plugin-styled-components`,
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// };

module.exports = {
  siteMetadata: {
    title: `Fusion+Code`,
    description: `Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `@ZCharles`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fusion+Code`,
        short_name: `FusionCode`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // Adjust the path accordingly
      },
    },
    // ... other plugins
  ],
};
