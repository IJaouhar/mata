let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Matacucarachas.com',
    description:
      'Blog esplicativo sobre como controlar y acabar con cucarachas',
    siteUrl: 'https://matacucarachas.com',
    image: '/images/share.jpg',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Información',
        slug: '/Informacion/',
      },
      {
        name: 'contacto',
        slug: '/contacto/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Matacucarachas.com',
        short_name: 'Matacucarachas.com',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/logo.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}