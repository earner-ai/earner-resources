import React from "react"
import Helmet from "react-helmet"

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
  amp?: boolean
  keywords?: []
}

const seoURL = (path?: string) => `https://www.earner.ai${path}`

// Twitter requires https to prepend any paths.
const addHttps = (path: string | undefined) => {
  if (path?.substring(0, 5) === "https") return path
  return `https:${path}`
}

const seoDescription = `As a Finnish job-seeker or employee, Earner is here to keep you informed on how to collect any unpaid salary and unemployment benefits from Kela. Additionally, you can learn about entrepreneurship as a Finnish startup. At Earner, we want to help you succeed as a job-seeker, current employee, or entrepreneur.`

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
  staticImage,
  keywords
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
    { name: `keywords`, content: keywords },

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
  staticImage,
  keywords,
  amp
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
          staticImage,
          keywords
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
