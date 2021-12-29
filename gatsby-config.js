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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156892997-1",
        head: true
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://earner.ai`
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-slug",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-preload-link-crossorigin",
    {
      resolve: "gatsby-plugin-no-sourcemaps"
    },
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
            resolve: `gatsby-remark-prismjs`,
            showLineNumbers: false,
            inlineCodeMarker: { typescript: "tsx" }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-graphql-codegen`,
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
        icon: `${__dirname}/static/images/logo.png`,
        prefer_related_applications: true
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "700", "900"]
              // fontDisplay: "swap"
            },
            {
              family: "Lato",
              variants: ["300", "400", "500"]
              // fontDisplay: "swap"
            },
            {
              family: "Bebas Neue",
              variants: ["300", "400", "500", "700"]
              // fontDisplay: "swap"
            }
          ]
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://earner.us4.list-manage.com/subscribe/post?u=23ae6a562f3e9bec5d88bf894&amp;id=61f65079c3" // add your MC list endpoint here; see instructions below
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },
    {
      resolve: "gatsby-plugin-html2amp",
      options: {
        files: ["**/*.html"],
        dist: "public/amp",
        optimize: true,
        htmlPlugins: [],
        cssPlugins: []
      }
    }
  ]
}
