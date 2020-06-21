import React from 'react'
import { graphql} from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

import { Container, ContentScroll, Content, PdfLink, PdfIcon } from '../styles/content.styles'


export default function ContentPage({ data }) {

  const files = data.allContentfulPdfContent.edges;

  return (
    <Layout>
      <Head title="Materiais" />
      <Container>
        <ContentScroll>
          {files.map(file => {
            const url = file.node.file.file.url.replace("//", "https://");

            return (
              <PdfLink href={url} target="_blank">
                <Content>
                  <PdfIcon size={40} />
                  <h2>
                    {file.node.file.description}
                  </h2>
                </Content>
              </PdfLink>

            )
          }
          )
          } 
        </ContentScroll>
      </Container>
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