module.exports = {
  siteMetadata: {
    title: 'Xadrez para todos',
    author: 'Gabriel Barth'
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ]
          }
        }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
     {
       resolve: 'gatsby-transformer-remark',
       options: {
         plugins: [
           'gatsby-remark-relative-images',
           {
             resolve: 'gatsby-remark-images',
             options: {
               maxWidth: 750,
               linkImagesToOriginal: false
             }
           }
         ]
       }
     }
  ]  
}
