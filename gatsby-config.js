module.exports = {
  pathPrefix: `/oasis-trends`,
  siteMetadata: {
    title: `Oasis Trends | Manufacturer of Leather Goods`,
    description: `We specialize in creating premium handmade leather products with exceptional craftsmanship. Our products are designed to last and reflect your unique style.`,
    author: `@oasistrends`,
    siteUrl: `https://oasistrends.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gh-pages`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:400,600,700`,
          `Inter\:300,400,500,600`
        ],
        display: 'swap'
      }
    }
  ],
}
