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
        return (
          file.node.files.map(f => {

            const url = f.file.url.replace("//", "");
            console.log(url)

            return (
              <Link href={url}  target="_blank">
                DONWLOAD HERE
              </Link>
            )

          })
          )

      })
      }

    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulPdfContent {
    edges {
      node {
        files {
          file {
            url
          }
        }
      }
    }
  }
}
`