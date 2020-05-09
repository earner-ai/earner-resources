// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// }

// ### Nyxo config.js ####
module.exports = {
  siteMetadata: {
    title: `earner`,
    description: `Serving the Finnish employment community.`,
    author: `@earner_ai`,
    siteUrl: `https://www.earner.ai`,
    social: {
      twitter: `earner_ai`
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-slug",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    "gatsby-plugin-preload-link-crossorigin",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://earner.ai`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/static/images`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources/employed`,
        name: `employeed`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources/job-seekers`,
        name: `job-seekers`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources/entrepreneurs`,
        name: `entrepreneur`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111729679-1"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Earner Website`,
        short_name: `earner`,
        start_url: `/`,
        background_color: `#F4F5F9`,
        theme_color: `#4a5aef`,
        display: `minimal-ui`,
        // icon: `${__dirname}/static/images/icon.jpg`,
        prefer_related_applications: true
        // related_applications: [
        //   {
        //     platform: "play",
        //     id: "fi.nyxo.app"
        //   }
        // ]
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `2bj8pq0ood89`,
    //     accessToken: "ydsuHbWEdNMIiQz4HzJLb2t-yUi5BJFog-KnDgS8qrM",
    //   },
    // },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-html2amp",
      options: {
        files: ["./**/**/index.html"],
        publicPath: "public",
        gaConfigPath: "amp-analytics.json",
        dist: "public/amp",
        optimize: true,
        htmlPlugins: [],
        cssPlugins: []
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Domine"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://earner.us4.list-manage.com/subscribe/post?u=23ae6a562f3e9bec5d88bf894&amp;id=61f65079c3" // add your MC list endpoint here; see instructions below
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-KR495JP",
    //     includeInDevelopment: true,
    //     defaultDataLayer: { platform: "gatsby" }
    //   }
    // },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false
      }
    }
  ]
}
