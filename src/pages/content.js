import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

export default function ContentPage({ data }) {

  const files = data.allContentfulPdfContent.edges;

  return (
    <Layout>
      <Head title="Materiais" />
      <h1>Contents</h1>

      {files.map(file => {
        const url = file.node.file.file.url.replace("//", "https://");
        
        return (
          <Link href={url} target="_blank">
            {file.node.file.description}
          </Link>
        )}
        )
      }

    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulPdfContent {
    edges {
      node {
        file {
         description
          file {
            url
          }
        }
      }
    }
  }
}
`