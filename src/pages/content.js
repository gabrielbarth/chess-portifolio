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

  const p = props.contentfulPdfContent.files.file.url + '';
  const validateProp = p.replace("//", "");

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <a href={validateProp} download>
        download pdf
        </a>
      {/* <ol>
        {
           data.allContentfulBlogPost.edges.map(post => (
          <li >
              <Link to={`/blog/${post.node.slug}`}> 
                <h2>  {post.node.title} </h2>
                <p>  {post.node.publishedDate} </p>
              </Link>  
          </li>
        ))
        }
         </ol> */}
    </Layout>
  )
}

export default ContentPage