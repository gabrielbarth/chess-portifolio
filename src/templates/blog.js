import React from 'react'
import { graphql } from 'gatsby'
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      files {
        file {
          url
        }
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
      [INLINES.HYPERLINK]: (node) => {
        if(node.data.uri.indexOf('youtube.com') !== -1){
          const test = node.data.uri.replace("watch?v=", "embed/")
          return (         
            <iframe width="560" height="315" src={test} frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          )
        }
      }

    }
  }

   return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1> {props.data.contentfulBlogPost.title} </h1>
      <p> {props.data.contentfulBlogPost.publishedDate} </p>
      <div>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        <a href={props.data.contentfulBlogPost.files.file.url} download="teste.pdf" >
         DOWNLOAD PDF
        </a>
      </div>
    </Layout>
  )
}

export default Blog