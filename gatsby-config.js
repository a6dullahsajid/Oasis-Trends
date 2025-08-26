module.exports = {
  pathPrefix: `/Oasis-Trends`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oasis Trends`,
        short_name: `Oasis Trends`,
        description: `Custom Leather Goods Manufacturer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#203f60`,
        display: `standalone`,
        icon: `static/assets/logo_only.png`,
        icons: [
          {
            src: `static/assets/favicon.ico`,
            sizes: `16x16 32x32`,
            type: `image/x-icon`,
          },
          {
            src: `static/assets/logo_only.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
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
