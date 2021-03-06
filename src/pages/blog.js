import React from 'react'
import {graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost (
            sort: {
              fields: publishedDate,
              order: DESC
            }
          ) {
            edges {
              node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
              }
            }
          }
        }
  `)

  return (
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol>
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
         </ol>
      </Layout>
  )
}

export default BlogPage