import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
      query {
        allContentfulVideo {
          nodes {
            title
            description {
              description
            }
            url {
              childMarkdownRemark {
                html
              }
              
            }
          }
        }
      }
`

const IndexPage = ({ data }) => {

  return (
      <Layout>
        <Head title="Home" />
    
        {
        data.allContentfulVideo.nodes.map(video => {
          return (
            <>
                <h2> {video.title} </h2>
                <p> {video.description.description}  </p>
                <div dangerouslySetInnerHTML={{ __html: video.url.childMarkdownRemark.html }} />
            </>
            )
        })
        }
      </Layout>
    
  )
}

export default IndexPage
