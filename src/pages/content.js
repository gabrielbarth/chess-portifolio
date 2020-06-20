import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

export const query = useStaticQuery(graphql`
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
`)

const ContentPage = (props) => {
  console.log(props)
  console.log(props.data)
  return (
    <Layout>
      <Head title="Materiais" />
      <h1>Contents</h1>
     
          {/* <a href={file.url} download>
             {'\n'}download pdf
          </a> */}

    </Layout>
  )
}

export default ContentPage