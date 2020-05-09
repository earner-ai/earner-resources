// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// function SEO({ description, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription
//         },
//         {
//           property: `og:title`,
//           content: title
//         },
//         {
//           property: `og:description`,
//           content: metaDescription
//         },
//         {
//           property: `og:type`,
//           content: `website`
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author
//         },
//         {
//           name: `twitter:title`,
//           content: title
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription
//         }
//       ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired
// }

// export default SEO

// ### NYXO SEO ###
import React from "react"
import Helmet from "react-helmet"
// import colors from "../../../static/colors"

interface HelmetProps {
  children?: React.ReactChildren
  title: string
  description?: string
  pathName: string
  image?: string
  url?: string
  canonical?: string
  contentType?: string
  published?: string
  updated?: string
  category?: string
  tags?: string
  author?: string
  twitter?: string
  readingTime?: string
  staticImage?: boolean
}

const seoURL = (path?: string) => `https://www.earner.ai${path}`

// Twitter requires https to prepend any paths.
const addHttps = (path: string | undefined) => {
  if (path?.substring(0, 5) === "https") return path
  return `https:${path}`
}

const seoDescription = `Earner shows you how to collect unpaid salary, teaches you about employment benefits from Kela, shares knowledge about entrepreneurship in Finland. Earner was created by people who have struggled with the job market and lack of knowledge regarding resources available to them. At Earner, we want to build a bridge between the employment community and services available to them from the Finnish government.`

const getMetaTags = ({
  title,
  description,
  url,
  image,
  contentType,
  published = "",
  updated,
  category,
  author = "Earner",
  tags,
  twitter,
  readingTime,
  staticImage
}: HelmetProps) => {
  const metaTags = [
    { charset: "utf-8" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "theme-color"
      // content: colors.radiantBlue,
    },
    { itemprop: "name", content: `${title} – Earner` },
    { itemprop: "description", content: description },
    {
      itemprop: "image",
      content: staticImage ? seoURL(image) : addHttps(image)
    },
    { name: "description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "Earner" },
    { name: "twitter:title", content: `${title} – Earner` },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: twitter || "Earner" },

    {
      name: "twitter:image",
      content: staticImage ? seoURL(image) : addHttps(image)
    },
    { property: "og:title", content: `${title} – Earner` },
    { property: "og:type", content: contentType },
    { property: "og:url", content: url },
    { property: "og:author", content: author },
    { property: "og:image", content: image },
    { property: "og:description", content: description },
    { property: "og:site_name", content: "Earner" }
  ]

  if (published)
    metaTags.push({ name: "article:published_time", content: published })
  if (updated)
    metaTags.push({ name: "article:modified_time", content: updated })
  if (category) metaTags.push({ name: "article:section", content: category })
  if (tags) metaTags.push({ name: "article:tag", content: tags })

  if (readingTime) {
    metaTags.push({ name: "twitter:label1", content: "Reading time" })
    metaTags.push({ name: "twitter:data1", content: readingTime })
  }

  return metaTags
}

const SEO = ({
  children,
  title,
  description = seoDescription,
  pathName,
  canonical,
  image,
  contentType,
  published = new Date().toISOString(),
  updated = new Date().toISOString(),
  category,
  tags,
  twitter,
  readingTime,
  author,
  staticImage
}: HelmetProps) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={`${title} | Earner`}
        link={[
          {
            rel: "canonical",
            href: canonical ? canonical : `https://www.earner.ai/}`
          }
        ]}
        meta={getMetaTags({
          title,
          description,
          contentType,
          pathName,
          url: seoURL(pathName),
          image,
          published,
          updated,
          category,
          tags,
          twitter,
          readingTime,
          staticImage
        })}
      >
        {children}
        <link rel="amphtml" href={`https://earner.ai/amp/}`} />
        <script type="application/ld+json">
          {`
{
"@context": "https://schema.org",
"@type": "Article",
"mainEntityOfPage": {
"@type": "WebPage",
"@id": "${seoURL(pathName)}"
},
"headline": "${title}",
"image": "${staticImage ? seoURL(image) : addHttps(image)}",
"datePublished": "${published}",
"dateModified": "${updated}",
"author": {
"@type": "Person",
"name": "${author ? author : "Earner Editors"}"
},
"publisher": {
"@type": "Organization",
"name": "Earner",
"logo": {
"@type": "ImageObject",
"url": "${seoURL("/logo.png")}"
}
},
"description": "${description}"
}
`}
        </script>
      </Helmet>
    </>
  )
}

export default SEO
