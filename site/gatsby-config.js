module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@benUNC`,
    wordPressUrl: `https://www.wpsteward.com`,
  },
plugins: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://gatsby.wpsteward.com` },
    },
  ],
};
