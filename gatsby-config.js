module.exports = {
  siteMetadata: {
    title: `Ancient History`,
    description: `Dive into the ancient history both accepted and theoretical beliefs of what was. In depth discussion on the younger dryas impact hypothesis, solar flares and the effect it had on pre deluvian civilizations.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        path:`${__dirname}/src/pages`,
        name:'pages',
      }
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        path:`${__dirname}/src/assets/images`,
        name:'images'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          {
            resolve:'gatsby-remark-relative-images',
            options:{
              name:'uploads'
            },
          },
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:2048
            }
          },
          {
            resolve:'gatsby-remark-copy-linked-files',
            options:{
              destinationDir:'static'
            }
          },
        ]
      }
    },
    {
      resolve:'gatsby-plugin-netlify-cms',
      options:{
        modulePath:`${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ancient-history`,
        short_name: `AH`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/AncientHistoryLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
