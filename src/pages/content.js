import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

const ContentPage = (props) => {

  const data = useStaticQuery(graphql`
  query {
    contentfulPdfContent{
      files {
        file {
          url
        }
      }
    }
  }
  `)

  

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Contents</h1>

      {
      data.contentfulPdfContent.files.map(file => {
      // const p = props.contentfulPdfContent.files.file.url + '';
      const p = file.url + '';
      const validateProp = p.replace("//", "");
      
      return  (
        <a href={validateProp} download>
          download pdf
        </a>
      )
      })
      }

    </Layout>
  )
}

export default ContentPage